'use client';

import React, { useState } from 'react';
import { speakers } from '../data/recordings';
import AudioPlayer from './AudioPlayer';

const ITEMS_PER_PAGE = 2;

const RecordingTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const totalPages = Math.ceil(speakers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentSpeakers = speakers.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
      <div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed min-w-[1200px]">
             <colgroup>
                <col className="w-48" />
                <col className="w-80" />
                {allModelIds.map((modelId) => (
                  <col key={modelId} className="w-96" />
                ))}
            </colgroup>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Speaker
              </th>
              <th scope="col" className="px-6 py-3">
                Original Recording
              </th>
              {allModelIds.map((modelId) => (
                <th key={modelId} scope="col" className="px-6 py-3">
                  {getModelName(modelId)}
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
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white align-top">
                  <div className="break-words">{speaker.name}</div>
                  <div className="text-xs text-gray-400 mt-1">ID: {speaker.id}</div>
                </td>
                <td className="px-6 py-4 align-top">
                  <div className="space-y-2">
                    <p className="text-sm italic text-gray-700 dark:text-gray-300 mb-1 whitespace-pre-wrap break-words">"{speaker.originalText}"</p>
                    <AudioPlayer src={speaker.originalAudio} />
                  </div>
                </td>
                {allModelIds.map((modelId) => {
                  const modelData = speaker.models.find((m) => m.modelId === modelId);
                  return (
                    <td key={modelId} className="px-6 py-4 align-top">
                      {modelData ? (
                        <div className="space-y-6">
                          <div>
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Cloned (Original Script)</span>
                            <p className="text-sm italic text-gray-700 dark:text-gray-300 mb-2 whitespace-pre-wrap break-words">"{modelData.clonedOriginalText}"</p>
                            <AudioPlayer src={modelData.clonedOriginalAudio} />
                          </div>
                          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">Cloned (New Script)</span>
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
          Page {currentPage} of {totalPages}
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
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
