import { Buffer } from "buffer";

/**
 * Convert raw PCM bytes to a valid WAV file buffer 
 * Ensures correct file size in header.
 */
export function pcmToWav(
  pcm: Buffer,
  sampleRate: number,
  channels: number,
  bitsPerSample: number
): Buffer {
  const byteRate = (sampleRate * channels * bitsPerSample) / 8;
  const blockAlign = (channels * bitsPerSample) / 8;
  const dataSize = pcm.length;
  const header = Buffer.alloc(44);

  header.write("RIFF", 0);
  header.writeUInt32LE(36 + dataSize, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16); // fmt chunk size
  header.writeUInt16LE(1, 20); // PCM format
  header.writeUInt16LE(channels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write("data", 36);
  header.writeUInt32LE(dataSize, 40);

  return Buffer.concat([header, pcm]);
}

/**
 * Apply volume gain to raw 16-bit PCM data in pure Javascript.
 * @param pcm - Buffer containing 16-bit PCM data
 * @param factor - Gain factor (e.g. 2.0 for double volume)
 * @returns Buffer - PCM data with gain applied
 */
export function applyVolumeGain(pcm: Buffer, factor: number): Buffer {
  const output = Buffer.alloc(pcm.length);
  
  for (let i = 0; i < pcm.length; i += 2) {
    if (i + 1 >= pcm.length) break;
    
    // Read 16-bit signed integer
    let sample = pcm.readInt16LE(i);
    
    // Apply gain
    sample = Math.round(sample * factor);
    
    // Clamp to 16-bit range
    sample = Math.max(-32768, Math.min(32767, sample));
    
    // Write back
    output.writeInt16LE(sample, i);
  }
  
  return output;
}
