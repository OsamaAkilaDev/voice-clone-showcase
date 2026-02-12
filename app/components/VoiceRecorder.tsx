"use client";

import React, { useState, useEffect, useRef } from "react";

const MAX_DURATION = 30;

interface VoiceRecorderProps {
  onConfirm?: (audioBlob: Blob) => void;
}

export default function VoiceRecorder({ onConfirm }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [timeLeft, setTimeLeft] = useState(MAX_DURATION);
  const [permissionStatus, setPermissionStatus] = useState<"idle" | "requesting" | "granted" | "denied">("idle");
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const mediaRecorderRef = useRef<any>(null); // Using any for custom recorder
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const leftChannelRef = useRef<Float32Array[]>([]);

  useEffect(() => {
    return () => {
      stopRecording();
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startRecording = async () => {
    try {
      setPermissionStatus("requesting");
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      setPermissionStatus("granted");

      // Initialize AudioContext at 16kHz
      const AudioContextClass = (window as any).AudioContext || (window as any).webkitAudioContext;
      const audioContext = new AudioContextClass({ sampleRate: 16000 });
      audioContextRef.current = audioContext;
      
      const source = audioContext.createMediaStreamSource(stream);
      const processor = audioContext.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;
      
      leftChannelRef.current = [];

      processor.onaudioprocess = (e: any) => {
        const left = e.inputBuffer.getChannelData(0);
        leftChannelRef.current.push(new Float32Array(left));
      };

      source.connect(processor);
      processor.connect(audioContext.destination);

      if (audioContext.state === "suspended") {
        await audioContext.resume();
      }

      setIsRecording(true);
      setTimeLeft(MAX_DURATION);

      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            stopRecording();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

    } catch (err) {
      console.error("Microphone access denied:", err);
      setPermissionStatus("denied");
    }
  };

  const stopRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      
      if (processorRef.current) {
        processorRef.current.disconnect();
        processorRef.current = null;
      }
      
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }

      if (leftChannelRef.current.length === 0) {
        console.warn("No audio data captured.");
        if (timerRef.current) clearInterval(timerRef.current);
        return;
      }

      const flatBuffer = flattenArray(leftChannelRef.current);
      const wavBlob = encodeWAV(flatBuffer, 16000);
      
      setAudioBlob(wavBlob);
      setAudioUrl(URL.createObjectURL(wavBlob));

      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  function flattenArray(channelBuffer: Float32Array[]) {
    let result = new Float32Array(channelBuffer.reduce((acc, b) => acc + b.length, 0));
    let offset = 0;
    for (let i = 0; i < channelBuffer.length; i++) {
      result.set(channelBuffer[i], offset);
      offset += channelBuffer[i].length;
    }
    return result;
  }

  function encodeWAV(samples: Float32Array, sampleRate: number) {
    const buffer = new ArrayBuffer(44 + samples.length * 2);
    const view = new DataView(buffer);

    /* RIFF identifier */
    writeString(view, 0, 'RIFF');
    /* file length */
    view.setUint32(4, 32 + samples.length * 2, true);
    /* RIFF type */
    writeString(view, 8, 'WAVE');
    /* format chunk identifier */
    writeString(view, 12, 'fmt ');
    /* format chunk length */
    view.setUint32(16, 16, true);
    /* sample format (raw) */
    view.setUint16(20, 1, true);
    /* channel count */
    view.setUint16(22, 1, true);
    /* sample rate */
    view.setUint32(24, sampleRate, true);
    /* byte rate (sample rate * block align) */
    view.setUint32(28, sampleRate * 2, true);
    /* block align (channel count * bytes per sample) */
    view.setUint16(32, 2, true);
    /* bits per sample */
    view.setUint16(34, 16, true);
    /* data chunk identifier */
    writeString(view, 36, 'data');
    /* data chunk length */
    view.setUint32(40, samples.length * 2, true);

    floatTo16BitPCM(view, 44, samples);

    return new Blob([view], { type: 'audio/wav' });
  }

  function floatTo16BitPCM(output: DataView, offset: number, input: Float32Array) {
    for (let i = 0; i < input.length; i++, offset += 2) {
      let s = Math.max(-1, Math.min(1, input[i]));
      output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
    }
  }

  function writeString(view: DataView, offset: number, string: string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  const resetRecording = () => {
    setAudioBlob(null);
    setAudioUrl(null);
    setTimeLeft(MAX_DURATION);
    setPermissionStatus("idle");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = ((MAX_DURATION - timeLeft) / MAX_DURATION) * 100;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 w-full py-4">
      {/* Visual Indicator */}
      <div className="relative w-48 h-48 flex-shrink-0 flex items-center justify-center">
        {/* Progress Circle Outer */}
        <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle 
            className="text-emerald-950/5 dark:text-white/5" 
            strokeWidth="6" 
            stroke="currentColor" 
            fill="transparent" 
            r="40" 
            cx="50" 
            cy="50" 
          />
          <circle 
            className={`${isRecording ? "text-gold-primary" : "text-emerald-500"} transition-all duration-300`} 
            strokeWidth="6" 
            strokeDasharray={251.2}
            strokeDashoffset={251.2 - (251.2 * progress) / 100}
            strokeLinecap="round" 
            stroke="currentColor" 
            fill="transparent" 
            r="40" 
            cx="50" 
            cy="50" 
          />
        </svg>

        {/* Inner Button State */}
        <div className="z-10 bg-white dark:bg-black/20 rounded-full w-36 h-36 shadow-lg flex flex-col items-center justify-center border border-black/5 dark:border-white/5">
          {isRecording ? (
             <>
               <span className="text-3xl font-black tabular-nums text-emerald-950 dark:text-white">{formatTime(timeLeft)}</span>
               <span className="text-[10px] font-bold text-red-500 animate-pulse mt-1 uppercase tracking-widest">Recording</span>
             </>
          ) : audioBlob ? (
             <>
               <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1">Success</span>
               <span className="text-sm font-bold text-emerald-950 dark:text-white">Sample Ready!</span>
             </>
          ) : (
             <>
               <span className="text-3xl font-black tabular-nums text-emerald-950 dark:text-white">0:30</span>
               <span className="text-[10px] font-bold text-foreground/40 mt-1 uppercase tracking-widest">Target</span>
             </>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col items-center md:items-start gap-6 w-full max-w-sm">
        <div className="text-center md:text-left space-y-2">
            <h3 className="text-xl font-black text-emerald-950 dark:text-white">
                {isRecording ? "Capture in Progress..." : audioBlob ? "Recording Completed" : "Ready to Record"}
            </h3>
            <p className="text-sm text-foreground/60 font-medium">
                {isRecording 
                    ? "Read the script above clearly and at a natural pace." 
                    : audioBlob 
                    ? "Listen to your sample or use it to start the cloning process."
                    : "Make sure you're in a quiet environment before starting."}
            </p>
        </div>

        {!isRecording && !audioBlob && (
          <button 
            onClick={startRecording}
            className="w-full px-6 py-3 bg-emerald-950 dark:bg-emerald-400 text-white dark:text-emerald-950 rounded-xl font-black text-sm hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3 group"
          >
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            Start Recording
          </button>
        )}

        {isRecording && (
          <button 
            onClick={stopRecording}
            className="w-full px-6 py-3 bg-red-500 text-white rounded-xl font-black text-sm hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3"
          >
            <div className="w-4 h-4 bg-white rounded-sm"></div>
            Stop Recording
          </button>
        )}

        {audioBlob && (
          <div className="w-full flex flex-col gap-4 animate-fade-in-up">
            <div className="bg-emerald-50 dark:bg-black/40 p-4 rounded-2xl border border-emerald-100 dark:border-white/5">
               <audio src={audioUrl!} controls className="w-full h-10" />
            </div>
            <div className="flex gap-4">
              <button 
                onClick={resetRecording}
                className="flex-1 px-6 py-3 bg-white/50 dark:bg-white/10 text-emerald-950 dark:text-white rounded-xl font-bold text-sm border border-black/5 dark:border-white/5 transition-all hover:scale-105 shadow-sm"
              >
                Retake
              </button>
              <button 
                className="flex-[2] px-6 py-3 bg-gold-primary text-emerald-950 rounded-xl font-black text-sm hover:scale-105 transition-all shadow-lg"
                onClick={() => {
                  if (onConfirm && audioBlob) {
                    onConfirm(audioBlob);
                  }
                }}
              >
                Use this Sample
              </button>
            </div>
          </div>
        )}

        {permissionStatus === "denied" && (
          <p className="text-red-500 font-bold text-sm mt-4 animate-fade-in-up text-center md:text-left">
            Mic access denied! Please enable it in browser settings.
          </p>
        )}
      </div>
    </div>
  );
}
