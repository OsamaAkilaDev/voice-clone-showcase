"use client";

import React from 'react';
import { ModelAverages } from '../lib/statistics';

interface ModelStatsProps {
  averages: {
    qwen: ModelAverages;
    resemble: ModelAverages;
  };
}

const StatCard = ({ title, qwenValue, resembleValue, unit, higherIsBetter = false }: { 
  title: string; 
  qwenValue: number; 
  resembleValue: number; 
  unit: string;
  higherIsBetter?: boolean;
}) => {
  const isQwenBetter = higherIsBetter ? qwenValue > resembleValue : qwenValue < resembleValue;
  const isResembleBetter = higherIsBetter ? resembleValue > qwenValue : resembleValue < qwenValue;

  return (
    <div className="bg-white/50 dark:bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/20 dark:border-white/5 shadow-lg flex flex-col gap-3">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/50">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className={`p-3 rounded-lg border flex flex-col ${isQwenBetter ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-white/5 dark:bg-white/5 border-transparent'}`}>
          <span className="text-[10px] uppercase font-bold text-foreground/40 mb-1">Qwen {isQwenBetter && <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 mt-1 ml-2 uppercase">Best</span>}</span>
          <div className="flex items-baseline gap-1">
            <span className={`text-lg font-bold ${isQwenBetter ? 'text-emerald-600 dark:text-emerald-400' : 'text-foreground'}`}>
              {qwenValue.toFixed(title.includes('Latency') ? 1 : 0)}
            </span>
            <span className="text-xs opacity-50">{unit}</span>
          </div>
        </div>
        <div className={`p-3 rounded-lg border flex flex-col ${isResembleBetter ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-white/5 dark:bg-white/5 border-transparent'}`}>
          <span className="text-[10px] uppercase font-bold text-foreground/40 mb-1">Resemble {isResembleBetter && <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 mt-1 ml-2 uppercase">Best</span>}</span>
          <div className="flex items-baseline gap-1">
            <span className={`text-lg font-bold ${isResembleBetter ? 'text-emerald-600 dark:text-emerald-400' : 'text-foreground'}`}>
              {resembleValue.toFixed(title.includes('Latency') ? 1 : 0)}
            </span>
            <span className="text-xs opacity-50">{unit}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ModelStats({ averages }: ModelStatsProps) {
  // Convert ms to s for latency if it's large, but let's keep it consistent with the data
  // The data has "3.6s" or "704ms". calculateAverages converts everything to ms.
  // We'll show latency in seconds and TTFB in ms.
  
  return (
    <div className="w-full mb-2">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Model Performance Summary</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Average TTFB" 
          qwenValue={averages.qwen.avgTTFB} 
          resembleValue={averages.resemble.avgTTFB} 
          unit="ms" 
        />
        <StatCard 
          title="Average Latency" 
          qwenValue={averages.qwen.avgLatency / 1000} 
          resembleValue={averages.resemble.avgLatency / 1000} 
          unit="s" 
        />
        <StatCard 
          title="Average File Size" 
          qwenValue={averages.qwen.avgFileSize} 
          resembleValue={averages.resemble.avgFileSize} 
          unit="KB" 
        />
      </div>
      {/* <div className="mt-4 p-3 bg-gold-primary/5 rounded-lg border border-gold-primary/10">
        <p className="text-[11px] text-foreground/60 italic">
          * Averages calculated based on the full Shakespeare corpus (30 samples). Higher performance (lower time/size) is highlighted in emerald.
        </p>
      </div> */}
    </div>
  );
}
