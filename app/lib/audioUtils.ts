import { spawn } from "child_process";
import { Buffer } from "buffer";

/**
 * Process audio buffer with FFmpeg
 * @param inputBuffer - Input audio buffer
 * @param inputArgs - FFmpeg arguments before input (e.g. format for raw data). Default []
 * @param outputArgs - FFmpeg arguments after input (e.g. filters, format). Default []
 * @returns Promise<Buffer> - Processed audio buffer
 */
export async function ffmpegProcess(
  inputBuffer: Buffer,
  inputArgs: string[] = [],
  outputArgs: string[] = []
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    // Command: ffmpeg [inputArgs] -i pipe:0 [outputArgs] pipe:1
    const args = [...inputArgs, "-i", "pipe:0", ...outputArgs, "pipe:1"];
    console.log(`🎵 FFmpeg Process: Input ${inputBuffer.length} bytes. Args: ${args.join(" ")}`);
    
    const ffmpeg = spawn("ffmpeg", args);
    const chunks: Buffer[] = [];

    ffmpeg.stdout.on("data", (chunk) => chunks.push(chunk));
    ffmpeg.stderr.on("data", (data) => {
        // Uncomment to debug FFmpeg stderr
        // console.log("ffmpeg stderr:", data.toString()); 
    });

    ffmpeg.on("close", (code) => {
      if (code === 0) {
        const result = Buffer.concat(chunks);
        console.log(`✅ FFmpeg Success: Output ${result.length} bytes`);
        resolve(result);
      } else {
        console.error(`❌ FFmpeg Failed with code ${code}`);
        reject(new Error(`FFmpeg process exited with code ${code}`));
      }
    });

    ffmpeg.stdin.on('error', (err) => {
        if ((err as any).code !== 'EPIPE') console.error('ffmpeg stdin error:', err);
    });

    ffmpeg.stdin.write(inputBuffer);
    ffmpeg.stdin.end();
  });
}

/**
 * Convert any audio buffer to Mono 16-bit WAV at specified sample rate
 * Uses raw PCM intermediate to ensure valid WAV header structure
 * Default sampleRate: 16000 (standard), Qwen requires 24000
 */
export async function toMonoWav(inputBuffer: Buffer, sampleRate: number = 16000): Promise<Buffer> {
  const pcmBuffer = await ffmpegProcess(inputBuffer, [], [
    "-ac", "1",
    "-ar", sampleRate.toString(),
    "-f", "s16le", // Output raw PCM
    "-acodec", "pcm_s16le"
  ]);
  
  return pcmToWav(pcmBuffer, sampleRate, 1, 16);
}

/** 
 * Convert raw PCM bytes to a valid WAV file buffer 
 * Ensures correct file size in header, which ffmpeg pipes often miss
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
