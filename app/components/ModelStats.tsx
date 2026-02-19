"use client";

import React from 'react';
import { ModelAverages } from '../lib/statistics';

interface ModelStatsProps {
  averages: {
    qwen: ModelAverages;
    chatterbox: ModelAverages;
    chatterboxTurbo: ModelAverages;
  };
}

const StatCard = ({ title, models, unit, higherIsBetter = false }: { 
  title: string; 
  models: { name: string; value: number }[];
  unit: string;
  higherIsBetter?: boolean;
}) => {
  const precision = title.includes('Latency') ? 1 : 0;
  
  // Format values for display and comparison
  const formattedModels = models.map(m => ({
    ...m,
    display: m.value.toFixed(precision)
  }));

  // Find the "best" value among the raw numbers
  const values = models.map(m => m.value);
  const bestValue = higherIsBetter ? Math.max(...values) : Math.min(...values);
  const bestDisplay = bestValue.toFixed(precision);

  // A model is "Best" if its display value matches the best display value
  // and it's unique. If multiple match, it's a "Tie".
  const matchingBest = formattedModels.filter(m => m.display === bestDisplay);
  const isGlobalTie = matchingBest.length > 1;

  return (
    <div className="bg-white/50 dark:bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/20 dark:border-white/5 shadow-lg flex flex-col gap-3">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/50">{title}</h3>
      <div className={`grid gap-3 ${models.length === 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2'}`}>
        {formattedModels.map((model) => {
          const isWinner = model.display === bestDisplay;
          const showBest = isWinner && !isGlobalTie;
          const showTie = isWinner && isGlobalTie;
          
          return (
            <div 
              key={model.name}
              className={`p-2.5 rounded-lg border flex flex-col ${isWinner ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-white/5 dark:bg-white/5 border-transparent'}`}
            >
              <span className="text-[10px] uppercase font-bold text-foreground/40 mb-1 flex items-center justify-between">
                {model.name}
                {showBest && <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">Best</span>}
                {showTie && <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">Tie</span>}
              </span>
              <div className="flex items-baseline gap-1">
                <span className={`text-base font-bold ${isWinner ? 'text-emerald-600 dark:text-emerald-400' : 'text-foreground'}`}>
                  {model.display}
                </span>
                <span className="text-[10px] opacity-50 font-medium">{unit}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function ModelStats({ averages }: ModelStatsProps) {
  return (
    <div className="w-full mb-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Model Performance Summary</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <StatCard 
          title="Average TTFB" 
          models={[
            { name: 'Qwen', value: averages.qwen.avgTTFB },
            { name: 'Chatterbox', value: averages.chatterbox.avgTTFB },
            { name: 'Turbo', value: averages.chatterboxTurbo.avgTTFB }
          ]}
          unit="ms" 
        />
        <StatCard 
          title="Average Latency" 
          models={[
            { name: 'Qwen', value: averages.qwen.avgLatency / 1000 },
            { name: 'Chatterbox', value: averages.chatterbox.avgLatency / 1000 },
            { name: 'Turbo', value: averages.chatterboxTurbo.avgLatency / 1000 }
          ]}
          unit="s" 
        />
        <StatCard 
          title="Average File Size" 
          models={[
            { name: 'Qwen', value: averages.qwen.avgFileSize },
            { name: 'Chatterbox', value: averages.chatterbox.avgFileSize },
            { name: 'Turbo', value: averages.chatterboxTurbo.avgFileSize }
          ]}
          unit="KB" 
        />
      </div>
    </div>
  );
}
