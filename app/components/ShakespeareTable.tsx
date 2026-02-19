'use client';

import React, { useState } from 'react';
import { shakespeareEntries } from '../data/shakespeare';
import AudioPlayer from './AudioPlayer';

const ITEMS_PER_PAGE = 1000;

const ShakespeareTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(shakespeareEntries.length / ITEMS_PER_PAGE);
  const safeCurrentPage = Math.min(currentPage, Math.max(1, totalPages));
  const effectiveStartIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const currentEntries = shakespeareEntries.slice(effectiveStartIndex, effectiveStartIndex + ITEMS_PER_PAGE);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="w-full h-full flex flex-col overflow-hidden space-y-4">
      {/* <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 bg-emerald-50 dark:bg-white/5 p-3 rounded-[1.5rem] shadow-xl flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-xs text-foreground/60 font-bold">
            Showing {effectiveStartIndex + 1}-{Math.min(effectiveStartIndex + ITEMS_PER_PAGE, shakespeareEntries.length)} of {shakespeareEntries.length}
          </span>
          <span className="text-xs font-bold text-foreground uppercase tracking-wider">Voice:</span>
          <div className="px-4 py-1.5 bg-gold-primary/20 border border-gold-primary/30 rounded-full text-xs font-bold text-foreground">
            🎭 Shakespeare (Custom Voice)
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
      </div> */}
      
      <div className="w-full flex-1 min-h-0 shadow-xl sm:rounded-[1rem] bg-card-bg border border-foreground/5 flex flex-col overflow-hidden">
        <div className="w-full flex-1 overflow-auto">
          <table className="w-full text-sm text-left text-foreground min-w-full table-fixed border-collapse">
            <colgroup>
              <col className="w-[200px]" />
              {/* Qwen */}
              <col className="w-[140px]" />
              <col className="w-[40px]" />
              <col className="w-[40px]" />
              <col className="w-[40px]" />
              {/* Chatterbox */}
              <col className="w-[140px]" />
               <col className="w-[40px]" />
              <col className="w-[40px]" />
              <col className="w-[40px]" />
              {/* Chatterbox Turbo */}
              <col className="w-[140px]" />
              <col className="w-[40px]" />
              <col className="w-[40px]" />
              <col className="w-[40px]" />
            </colgroup>
            <thead className="text-xs text-white uppercase bg-emerald-950 sticky top-0 z-20 shadow-sm">
              <tr>
                <th scope="col" rowSpan={2} className="px-4 py-3 bg-emerald-950 border-r border-emerald-800 align-middle">
                  <span className="truncate">Text</span>
                </th>
                <th scope="col" colSpan={4} className="px-4 py-2 bg-indigo-900 text-center border-r border-emerald-800">
                  <span className="text-indigo-200">Qwen</span>
                </th>
                <th scope="col" colSpan={4} className="px-4 py-2 bg-teal-900 text-center border-r border-emerald-800">
                  <span className="text-teal-200">Chatterbox</span>
                </th>
                <th scope="col" colSpan={4} className="px-4 py-2 bg-amber-900 text-center">
                  <span className="text-amber-200">Turbo</span>
                </th>
              </tr>
              <tr>
                {/* Qwen */}
                <th scope="col" className="px-2 py-2 bg-indigo-900 text-center text-[10px] font-bold tracking-tight">Audio</th>
                <th scope="col" className="px-2 py-2 bg-indigo-950 text-center text-[10px] font-bold tracking-tight">TTFB</th>
                <th scope="col" className="px-2 py-2 bg-indigo-900 text-center text-[10px] font-bold tracking-tight">Lat</th>
                <th scope="col" className="px-2 py-2 bg-indigo-950 text-center text-[10px] font-bold tracking-tight border-r border-emerald-800">Size</th>
                {/* Chatterbox */}
                <th scope="col" className="px-2 py-2 bg-teal-900 text-center text-[10px] font-bold tracking-tight">Audio</th>
                <th scope="col" className="px-2 py-2 bg-teal-950 text-center text-[10px] font-bold tracking-tight">TTFB</th>
                <th scope="col" className="px-2 py-2 bg-teal-900 text-center text-[10px] font-bold tracking-tight">Lat</th>
                <th scope="col" className="px-2 py-2 bg-teal-950 text-center text-[10px] font-bold tracking-tight border-r border-emerald-800">Size</th>
                {/* Chatterbox Turbo */}
                <th scope="col" className="px-2 py-2 bg-amber-900 text-center text-[10px] font-bold tracking-tight">Audio</th>
                <th scope="col" className="px-2 py-2 bg-amber-950 text-center text-[10px] font-bold tracking-tight">TTFB</th>
                <th scope="col" className="px-2 py-2 bg-amber-900 text-center text-[10px] font-bold tracking-tight">Lat</th>
                <th scope="col" className="px-2 py-2 bg-amber-950 text-center text-[10px] font-bold tracking-tight">Size</th>
              </tr>
            </thead>
            <tbody>
              {currentEntries.map((entry) => (
                <tr key={entry.id} className="bg-card-bg border-none hover:bg-emerald-500/5 transition-colors">
                  <td className="px-4 py-4 align-top border-r border-foreground/5">
                    <div className="space-y-1">
                      <p className="text-xs italic text-foreground/80 whitespace-pre-wrap break-words line-clamp-3" title={entry.text}>&quot;{entry.text}&quot;</p>
                      <div className="text-[10px] text-foreground/40 font-mono uppercase tracking-tighter text-right">ID: {entry.id}</div>
                    </div>
                  </td>
                  {/* Qwen */}
                  <td className="px-2 py-3 align-middle bg-indigo-50/20 dark:bg-indigo-950/20">
                    <AudioPlayer src={entry.qwen.audio} />
                  </td>
                  <td className="px-2 py-3 align-middle text-center text-[11px] font-mono bg-indigo-100/10 dark:bg-indigo-900/15">{entry.qwen.ttfb}</td>
                  <td className="px-2 py-3 align-middle text-center text-[11px] font-mono bg-indigo-50/20 dark:bg-indigo-950/20">{entry.qwen.latency}</td>
                  <td className="px-2 py-3 align-middle text-center text-[11px] font-mono bg-indigo-100/10 dark:bg-indigo-900/15 border-r border-foreground/5">{entry.qwen.fileSize}</td>
                  
                  {/* Chatterbox */}
                  <td className="px-2 py-3 align-middle bg-teal-50/20 dark:bg-teal-950/20">
                    <AudioPlayer src={entry.chatterbox.audio} />
                  </td>
                  <td className="px-2 py-3 align-middle text-center text-[11px] font-mono bg-teal-100/10 dark:bg-teal-900/15">{entry.chatterbox.ttfb}</td>
                  <td className="px-2 py-3 align-middle text-center text-[11px] font-mono bg-teal-50/20 dark:bg-teal-950/20">{entry.chatterbox.latency}</td>
                  <td className="px-2 py-3 align-middle text-center text-[11px] font-mono bg-teal-100/10 dark:bg-teal-900/15 border-r border-foreground/5">{entry.chatterbox.fileSize}</td>
                  
                  {/* Chatterbox Turbo */}
                  <td className="px-2 py-3 align-middle bg-amber-50/20 dark:bg-amber-950/20">
                    <AudioPlayer src={entry.chatterboxTurbo.audio} />
                  </td>
                  <td className="px-2 py-3 align-middle text-center text-[11px] font-mono bg-amber-100/10 dark:bg-amber-900/15">{entry.chatterboxTurbo.ttfb}</td>
                  <td className="px-2 py-3 align-middle text-center text-[11px] font-mono bg-amber-50/20 dark:bg-amber-950/20">{entry.chatterboxTurbo.latency}</td>
                  <td className="px-2 py-3 align-middle text-center text-[11px] font-mono bg-amber-100/10 dark:bg-amber-900/15">{entry.chatterboxTurbo.fileSize}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="flex items-center justify-between px-6 py-3 bg-emerald-50/50 dark:bg-white/5 rounded-[1.5rem]">
        <span className="text-xs text-foreground/60 font-bold">
          Showing {effectiveStartIndex + 1}-{Math.min(effectiveStartIndex + ITEMS_PER_PAGE, shakespeareEntries.length)} of {shakespeareEntries.length}
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
      </div> */}
    </div>
  );
};

export default ShakespeareTable;
