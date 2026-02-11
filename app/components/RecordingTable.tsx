'use client';

import React, { useState } from 'react';
import { speakers } from '../data/recordings';
import AudioPlayer from './AudioPlayer';

const ITEMS_PER_PAGE = 20;

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
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Length Filter of Original Recording (seconds):</span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              placeholder="Min"
              value={minLen}
              onChange={(e) => { setMinLen(e.target.value); setCurrentPage(1); }}
              className="w-20 px-2 py-1 text-sm border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <span className="text-gray-400">-</span>
            <input
              type="number"
              placeholder="Max"
              value={maxLen}
              onChange={(e) => { setMaxLen(e.target.value); setCurrentPage(1); }}
              className="w-20 px-2 py-1 text-sm border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <span className="text-xs text-gray-500">
            Showing {filteredSpeakers.length} of {speakers.length} recordings
          </span>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-700 dark:text-gray-400">
            Page {safeCurrentPage} of {totalPages || 1}
          </span>
          <div className="inline-flex">
            <button
              onClick={handlePrevious}
              disabled={safeCurrentPage === 1}
              className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              disabled={safeCurrentPage === totalPages || totalPages === 0}
              className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full overflow-x-auto shadow-md sm:rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 min-w-full border-collapse">
             <colgroup>
                <col className={minimizedColumns['speaker'] ? 'w-[60px]' : 'w-[120px]'} />
                <col className={minimizedColumns['original'] ? 'w-[60px]' : 'w-[280px]'} />
                {allModelIds.map((modelId) => (
                  <col key={modelId} className={minimizedColumns[modelId] ? 'w-[60px]' : 'w-[220px]'} />
                ))}
            </colgroup>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3 border-r border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-between">
                  {!minimizedColumns['speaker'] && <span className="truncate">Speaker</span>}
                  <button 
                    onClick={() => toggleColumn('speaker')}
                    className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded text-lg font-bold w-6 h-6 flex items-center justify-center transition-colors"
                    title={minimizedColumns['speaker'] ? "Expand" : "Minimize"}
                  >
                    {minimizedColumns['speaker'] ? '+' : '−'}
                  </button>
                </div>
              </th>
              <th scope="col" className="px-4 py-3 border-r border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-between">
                  {!minimizedColumns['original'] && <span className="truncate">Original Recording</span>}
                  <button 
                    onClick={() => toggleColumn('original')}
                    className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded text-lg font-bold w-6 h-6 flex items-center justify-center transition-colors"
                    title={minimizedColumns['original'] ? "Expand" : "Minimize"}
                  >
                    {minimizedColumns['original'] ? '+' : '−'}
                  </button>
                </div>
              </th>
              {allModelIds.map((modelId) => (
                <th key={modelId} scope="col" className="px-4 py-3 border-r border-gray-200 dark:border-gray-600 last:border-r-0">
                  <div className="flex items-center justify-between">
                    {!minimizedColumns[modelId] && <span className="truncate">{getModelName(modelId)}</span>}
                    <button 
                      onClick={() => toggleColumn(modelId)}
                      className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded text-lg font-bold w-6 h-6 flex items-center justify-center transition-colors"
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
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-4 py-4 font-medium text-gray-900 dark:text-white align-top border-r border-gray-100 dark:border-gray-700">
                  {!minimizedColumns['speaker'] ? (
                    <>
                      <div className="break-words">{speaker.name}</div>
                      <div className="text-xs text-gray-400 mt-1">ID: {speaker.id}</div>
                    </>
                  ) : (
                    <div className="flex justify-center text-gray-300">...</div>
                  )}
                </td>
                <td className="px-4 py-4 align-top border-r border-gray-100 dark:border-gray-700">
                  {!minimizedColumns['original'] ? (
                    <div className="space-y-2">
                      <p className="text-sm italic text-gray-700 dark:text-gray-300 mb-1 whitespace-pre-wrap break-words">"{speaker.originalText}"</p>
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
                    <td key={modelId} className="px-4 py-4 align-top border-r border-gray-100 dark:border-gray-700 last:border-r-0">
                      {isMinimized ? (
                        <div className="flex justify-center text-gray-300 text-xs">...</div>
                      ) : modelData ? (
                        <div className="space-y-6">
                            <div>
                              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Original Script</span>
                              <p className="text-sm italic text-gray-700 dark:text-gray-300 mb-2 whitespace-pre-wrap break-words">"{modelData.clonedOriginalText}"</p>
                              <AudioPlayer src={modelData.clonedOriginalAudio} />
                            </div>
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">New Script</span>
                              <p className="text-sm italic text-gray-700 dark:text-gray-300 mb-2 whitespace-pre-wrap break-words">"{modelData.clonedNewText}"</p>
                              <AudioPlayer src={modelData.clonedNewAudio} />
                            </div>
                        </div>
                      ) : (
                        <span className="text-xs text-gray-400">Not available</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-between items-center px-4">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Page {safeCurrentPage} of {totalPages || 1}
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={handlePrevious}
            disabled={safeCurrentPage === 1}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={safeCurrentPage === totalPages || totalPages === 0}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>

    </div>
  );
};

export default RecordingTable;
