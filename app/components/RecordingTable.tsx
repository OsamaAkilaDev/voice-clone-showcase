'use client';

import React, { useState } from 'react';
import { speakers } from '../data/recordings';
import AudioPlayer from './AudioPlayer';

const ITEMS_PER_PAGE = 5;

const RecordingTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [minimizedColumns, setMinimizedColumns] = useState<Record<string, boolean>>({});
  const [minLen, setMinLen] = useState<string>('');
  const [maxLen, setMaxLen] = useState<string>('');

  const toggleColumn = (id: string) => {
    setMinimizedColumns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter speakers based on length
  const filteredSpeakers = speakers.filter((s) => {
    const d = s.duration;
    const min = minLen === '' ? 0 : parseFloat(minLen);
    const max = maxLen === '' ? Infinity : parseFloat(maxLen);
    return d >= min && d <= max;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredSpeakers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  // Ensure current page is valid after filtering
  const safeCurrentPage = Math.min(currentPage, Math.max(1, totalPages));
  const effectiveStartIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;

  const currentSpeakers = filteredSpeakers.slice(effectiveStartIndex, effectiveStartIndex + ITEMS_PER_PAGE);

  // Get all unique model names to create columns
  const allModelIds = Array.from(
    new Set(speakers.flatMap((s) => s.models.map((m) => m.modelId)))
  );

  const getModelName = (id: string) => {
      const model = speakers.flatMap(s => s.models).find(m => m.modelId === id);
      return model ? model.modelName : id;
  }

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 bg-emerald-50 dark:bg-white/5 p-3 rounded-[1.5rem] shadow-xl">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-foreground uppercase tracking-wider">Filter:</span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="Min"
              value={minLen}
              onChange={(e) => { setMinLen(e.target.value); setCurrentPage(1); }}
              className="w-16 px-2 py-1 text-xs border rounded-md bg-card-bg border-gold-primary/20 text-foreground"
            />
            <span className="text-gray-400">-</span>
            <input
              type="number"
              placeholder="Max"
              value={maxLen}
              onChange={(e) => { setMaxLen(e.target.value); setCurrentPage(1); }}
              className="w-16 px-2 py-1 text-xs border rounded-md bg-card-bg border-gold-primary/20 text-foreground"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex shadow-sm rounded-lg overflow-hidden">
            <button
              onClick={handlePrevious}
              disabled={safeCurrentPage === 1}
              className="flex items-center justify-center px-4 h-9 text-sm font-bold text-emerald-950 bg-gold-primary hover:bg-white hover:text-emerald-950 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              disabled={safeCurrentPage === totalPages || totalPages === 0}
              className="flex items-center justify-center px-4 h-9 text-sm font-bold text-emerald-950 bg-gold-primary border-l border-emerald-950/10 hover:bg-white hover:text-emerald-950 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              Next
            </button>
          </div>
          <span className="text-xs text-foreground/60 font-medium">
            Page {safeCurrentPage}/{totalPages || 1}
          </span>
        </div>
      </div>
      
      <div className="w-full shadow-xl sm:rounded-[1rem] bg-card-bg border border-foreground/5 overflow-hidden">
        <div className="overflow-x-auto overflow-y-auto max-h-[66vh] w-full">
          <table className="w-full text-sm text-left text-foreground min-w-full table-fixed border-collapse">
               <colgroup>
                  <col className={minimizedColumns['speaker'] ? 'w-[40px]' : 'w-[80px]'} />
                  <col className={minimizedColumns['original'] ? 'w-[40px]' : 'w-[220px]'} />
                  {allModelIds.map((modelId) => (
                    <col key={modelId} className={minimizedColumns[modelId] ? 'w-[40px]' : 'w-[160px]'} />
                  ))}
              </colgroup>
              <thead className="text-xs text-white uppercase bg-emerald-950 sticky top-0 z-20 shadow-sm">
              <tr>
                <th scope="col" className="px-4 py-3 bg-emerald-950">
                  <div className="flex items-center justify-between">
                    {!minimizedColumns['speaker'] && <span className="truncate">Speaker</span>}
                    <button 
                      onClick={() => toggleColumn('speaker')}
                      className="p-1 hover:bg-white/10 rounded transition-colors"
                    >
                      {minimizedColumns['speaker'] ? '+' : '−'}
                    </button>
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 bg-emerald-950">
                  <div className="flex items-center justify-between">
                    {!minimizedColumns['original'] && <span className="truncate">Original Script</span>}
                    <button 
                      onClick={() => toggleColumn('original')}
                      className="p-1 hover:bg-white/10 rounded transition-colors"
                    >
                      {minimizedColumns['original'] ? '+' : '−'}
                    </button>
                  </div>
                </th>
                {allModelIds.map((modelId) => (
                  <th key={modelId} scope="col" className="px-4 py-3 bg-emerald-950">
                    <div className="flex items-center justify-between gap-1">
                      {!minimizedColumns[modelId] && <span className="truncate">{getModelName(modelId)}</span>}
                      <button 
                        onClick={() => toggleColumn(modelId)}
                        className="p-1 hover:bg-white/10 rounded transition-colors"
                        title={minimizedColumns[modelId] ? "Expand" : "Minimize"}
                      >
                        {minimizedColumns[modelId] ? '+' : '−'}
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentSpeakers.map((speaker) => (
                <tr
                  key={speaker.id}
                  className="bg-card-bg border-none hover:bg-emerald-500/5 transition-colors"
                >
                  <td className="px-4 py-4 font-bold text-foreground align-top">
                    {!minimizedColumns['speaker'] ? (
                      <>
                        <div className="break-words text-sm">{speaker.name}</div>
                        <div className="text-[10px] text-foreground/40 mt-1 font-mono uppercase tracking-tighter">ID: {speaker.id}</div>
                      </>
                    ) : (
                      <div className="flex justify-center text-gray-300">...</div>
                    )}
                  </td>
                  <td className="px-4 py-4 align-top bg-black/5 dark:bg-white/5">
                    {!minimizedColumns['original'] ? (
                      <div className="space-y-2">
                        <p className="text-xs italic text-foreground/80 mb-1 whitespace-pre-wrap break-words">"{speaker.originalText}"</p>
                        <AudioPlayer src={speaker.originalAudio} />
                      </div>
                    ) : (
                      <div className="flex justify-center text-gray-300">...</div>
                    )}
                  </td>
                  {allModelIds.map((modelId) => {
                    const modelData = speaker.models.find((m) => m.modelId === modelId);
                    const isMinimized = minimizedColumns[modelId];
                    return (
                      <td key={modelId} className="px-4 py-4 align-top">
                        {isMinimized ? (
                          <div className="flex justify-center text-gray-300 text-[10px]">...</div>
                        ) : modelData ? (
                          <div className="space-y-3">
                            <div className="bg-white/50 dark:bg-black/50 p-2.5 rounded-xl">
                              <span className="text-[10px] font-bold text-foreground uppercase tracking-widest block mb-1.5">Original Text</span>
                              <p className="text-xs italic text-foreground mb-1.5 whitespace-pre-wrap break-words">"{modelData.clonedOriginalText}"</p>
                              <AudioPlayer src={modelData.clonedOriginalAudio} />
                            </div>
                            
                            <div className="bg-gold-primary/10 p-2.5 rounded-xl border border-gold-primary/20">
                              <span className="text-[10px] font-bold text-gold-primary uppercase tracking-widest block mb-1.5">New Script</span>
                              <p className="text-xs italic text-foreground mb-1.5 whitespace-pre-wrap break-words">"{modelData.clonedNewText}"</p>
                              <AudioPlayer src={modelData.clonedNewAudio} />
                            </div>
                          </div>
                        ) : (
                          <div className="text-gray-300 italic text-xs">No data</div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-3 bg-emerald-50/50 dark:bg-white/5 rounded-[1.5rem]">
        <span className="text-xs text-foreground/60 font-bold">
          Showing {effectiveStartIndex + 1}-{Math.min(effectiveStartIndex + ITEMS_PER_PAGE, filteredSpeakers.length)} of {filteredSpeakers.length}
        </span>
        <div className="inline-flex shadow-sm rounded-lg overflow-hidden">
          <button
            onClick={handlePrevious}
            disabled={safeCurrentPage === 1}
            className="flex items-center justify-center px-4 h-9 text-sm font-bold text-emerald-950 bg-gold-primary hover:bg-white hover:text-emerald-950 transition-all disabled:opacity-40"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={safeCurrentPage === totalPages || totalPages === 0}
            className="flex items-center justify-center px-4 h-9 text-sm font-bold text-emerald-950 bg-gold-primary border-l border-emerald-950/10 hover:bg-white hover:text-emerald-950 transition-all disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordingTable;
