import { ShakespeareEntry } from "../data/shakespeare";

/**
 * Parses time strings like "704ms", "2.9s", "20.1s" into milliseconds (number).
 */
export function parseTime(timeStr: string): number {
  if (!timeStr) return 0;
  const match = timeStr.match(/^([\d.]+)([a-z]+)$/i);
  if (!match) return 0;
  
  const value = parseFloat(match[1]);
  const unit = match[2].toLowerCase();
  
  if (unit === 's') return value * 1000;
  if (unit === 'ms') return value;
  
  return value;
}

/**
 * Parses size strings like "107KB", "1.2MB" into kilobytes (number).
 */
export function parseSize(sizeStr: string): number {
  if (!sizeStr) return 0;
  const match = sizeStr.match(/^([\d.]+)([a-z]+)$/i);
  if (!match) return 0;
  
  const value = parseFloat(match[1]);
  const unit = match[2].toUpperCase();
  
  if (unit === 'MB') return value * 1024;
  if (unit === 'KB') return value;
  if (unit === 'B') return value / 1024;
  
  return value;
}

export interface ModelAverages {
  avgTTFB: number;
  avgLatency: number;
  avgFileSize: number;
}

export function calculateAverages(entries: ShakespeareEntry[]) {
  const qwenTotals = { ttfb: 0, latency: 0, size: 0, count: 0 };
  const resembleTotals = { ttfb: 0, latency: 0, size: 0, count: 0 };

  entries.forEach(entry => {
    if (entry.qwen) {
      qwenTotals.ttfb += parseTime(entry.qwen.ttfb);
      qwenTotals.latency += parseTime(entry.qwen.latency);
      qwenTotals.size += parseSize(entry.qwen.fileSize);
      qwenTotals.count++;
    }
    if (entry.resemble) {
      resembleTotals.ttfb += parseTime(entry.resemble.ttfb);
      resembleTotals.latency += parseTime(entry.resemble.latency);
      resembleTotals.size += parseSize(entry.resemble.fileSize);
      resembleTotals.count++;
    }
  });

  const getAverages = (totals: { ttfb: number, latency: number, size: number, count: number }): ModelAverages => ({
    avgTTFB: totals.count > 0 ? totals.ttfb / totals.count : 0,
    avgLatency: totals.count > 0 ? totals.latency / totals.count : 0,
    avgFileSize: totals.count > 0 ? totals.size / totals.count : 0
  });

  return {
    qwen: getAverages(qwenTotals),
    resemble: getAverages(resembleTotals)
  };
}
