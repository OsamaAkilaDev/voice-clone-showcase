"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import VoiceRecorder from "../components/VoiceRecorder";

const CLONE_SCRIPTS = [
  "Early morning is a peaceful time when the world feels fresh and new. Sunlight filters through the trees, creating patterns of light and shadow on the ground. Birds begin their songs, and the air is often crisp and cool. It is the perfect moment to reflect on the day ahead and set a positive intention for everything you hope to accomplish.",
  "Deep in the heart of the ancient forest, hidden paths wind through towering oaks and silver birches. Small brooks babble over mossy stones, their clear water reflecting the vibrant green of the canopy above. This natural sanctuary offers a quiet escape from the noise of modern life, allowing one to reconnect with the simple beauty of the earth.",
  "Innovation in science and technology continues to reshape our understanding of the universe. From exploring distant planets to developing sustainable energy sources, the human spirit of curiosity knows no bounds. Every discovery brings new questions and challenges, pushing us to think creatively and collaborate across borders for the benefit of all humanity.",
  "Cooking a delicious meal is an art form that engages all the senses. The aroma of fresh herbs, the sizzle of a hot pan, and the vibrant colors of ripe vegetables come together to create something special. Sharing food with friends and family is a timeless tradition that fosters connection and builds lasting memories around the dinner table.",
  "Public libraries are hubs of knowledge and community connection, offering resources for people of all ages. Whether you are looking for a classic novel, researching a local history project, or attending a workshop, the library provides a welcoming space for discovery. It stands as a testament to the value we place on education and accessible information for everyone."
];

const OUTPUT_TEXT = "Welcome to the future of voice technology. This isn't just a recording; it's a seamless blend of clarity and character, designed to bring your words to life in under fifteen seconds.";

async function convertToWav(blob: Blob): Promise<Blob> {
  const arrayBuffer = await blob.arrayBuffer();
  const audioCtx = new AudioContext();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  audioCtx.close();

  const numChannels = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const length = audioBuffer.length;
  const bitsPerSample = 16;
  const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
  const blockAlign = numChannels * (bitsPerSample / 8);
  const dataSize = length * numChannels * (bitsPerSample / 8);
  const bufferSize = 44 + dataSize;
  const buffer = new ArrayBuffer(bufferSize);
  const view = new DataView(buffer);

  const writeStr = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
  };
  writeStr(0, "RIFF");
  view.setUint32(4, 36 + dataSize, true);
  writeStr(8, "WAVE");
  writeStr(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitsPerSample, true);
  writeStr(36, "data");
  view.setUint32(40, dataSize, true);

  let offset = 44;
  for (let i = 0; i < length; i++) {
    for (let ch = 0; ch < numChannels; ch++) {
      const sample = Math.max(-1, Math.min(1, audioBuffer.getChannelData(ch)[i]));
      view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
      offset += 2;
    }
  }

  return new Blob([buffer], { type: "audio/wav" });
}

type Step = "recording" | "transcribing" | "cloning" | "results";

interface ModelResult {
  id: string;
  status: "pending" | "loading" | "done" | "error";
  audioUrl?: string;
  error?: string;
}

interface CloneClientProps {
  backendUrl: string;
}

export default function CloneClient({ backendUrl }: CloneClientProps) {
  const router = useRouter();
  const [script, setScript] = useState("");
  const [step, setStep] = useState<Step>("recording");
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [originalAudioUrl, setOriginalAudioUrl] = useState<string | null>(null);
  const [transcription, setTranscription] = useState<string>("");
  const [modelResults, setModelResults] = useState<ModelResult[]>([]);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const cloneAbortRef = useRef(false);

  const MODELS = [
    { id: "qwen", name: "Qwen", endpoint: `${backendUrl}/api/clone/qwen`, icon: "/logos/Qwen_logo.png", gradient: "from-indigo-500 via-indigo-600 to-blue-700", shadow: "shadow-indigo-500/30" },
    { id: "fish", name: "Fish Audio", endpoint: `${backendUrl}/api/clone/fish`, icon: "/logos/fish-audio-logo.png", gradient: "from-rose-500 via-rose-600 to-pink-700", shadow: "shadow-rose-500/30" },
    { id: "eleven-normal", name: "ElevenLabs (v2.5)", endpoint: `${backendUrl}/api/clone/eleven-normal`, icon: "/logos/eleven-labs-logo.png", gradient: "from-amber-400 via-amber-500 to-orange-600", shadow: "shadow-amber-500/30" },
    { id: "eleven-flash", name: "ElevenLabs (Flash)", endpoint: `${backendUrl}/api/clone/eleven-flash`, icon: "/logos/eleven-labs-logo.png", gradient: "from-cyan-400 via-cyan-500 to-blue-600", shadow: "shadow-cyan-500/30" },
    { id: "resemble", name: "Resemble.ai", endpoint: `${backendUrl}/api/clone/resemble`, icon: "/logos/resembleai_logo.jpeg", gradient: "from-emerald-500 via-emerald-600 to-teal-700", shadow: "shadow-emerald-500/30" },
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * CLONE_SCRIPTS.length);
    setScript(CLONE_SCRIPTS[randomIndex]);
  }, []);

  const handleConfirm = async (blob: Blob) => {
    setAudioBlob(blob);
    setOriginalAudioUrl(URL.createObjectURL(blob));
    setStep("transcribing");
    setError(null);

    try {
      const formData = new FormData();
      formData.append("audio", blob, "recording.webm");

      const resp = await fetch("/api/transcribe", {
        method: "POST",
        body: formData,
      });

      if (!resp.ok) {
        const errData = await resp.json();
        throw new Error(errData.error || "Transcription failed");
      }

      const data = await resp.json();
      setTranscription(data.text);
      
      const wavBlob = await convertToWav(blob);
      startCloning(wavBlob, data.text);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Transcription failed");
      setStep("recording");
    }
  };

  const startCloning = async (blob: Blob, referenceText: string) => {
    setStep("cloning");
    cloneAbortRef.current = false;

    const initialResults: ModelResult[] = MODELS.map(m => ({
      id: m.id,
      status: "loading" as const,
    }));
    setModelResults(initialResults);

    const promises = MODELS.map(async (model) => {
      if (cloneAbortRef.current) return;

      try {
        const formData = new FormData();
        formData.append("audio", blob, "recording.wav");
        formData.append("text", OUTPUT_TEXT);
        formData.append("referenceText", referenceText);

        const resp = await fetch(model.endpoint, {
          method: "POST",
          body: formData,
        });

        if (!resp.ok) {
          let errMsg = `${model.name} failed`;
          try {
            const errData = await resp.json();
            errMsg = errData.error || errMsg;
          } catch {
          }
          setModelResults(prev => prev.map(r => 
            r.id === model.id ? { ...r, status: "error" as const, error: errMsg } : r
          ));
          return;
        }

        const audioData = await resp.blob();
        const url = URL.createObjectURL(audioData);

        setModelResults(prev => prev.map(r => 
          r.id === model.id ? { ...r, status: "done" as const, audioUrl: url } : r
        ));
      } catch (err) {
        setModelResults(prev => prev.map(r => 
          r.id === model.id ? { ...r, status: "error" as const, error: err instanceof Error ? err.message : "Unknown error" } : r
        ));
      }
    });

    await Promise.allSettled(promises);
    setStep("results");
  };

  const handleSubmitVote = async () => {
    if (!selectedModel) return;

    try {
      setSubmitted(true);
      const resp = await fetch("/api/votes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ modelId: selectedModel }),
      });

      if (!resp.ok) {
        throw new Error("Failed to submit vote");
      }

      setTimeout(() => {
        setSubmitted(false);
        router.push("/#models");
      }, 2000);
    } catch (err) {
      console.error("Error submitting vote:", err);
      setError("Failed to submit vote. Please try again.");
      setSubmitted(false);
    }
  };

  const handleStartOver = () => {
    setStep("recording");
    setAudioBlob(null);
    setOriginalAudioUrl(null);
    setTranscription("");
    setModelResults([]);
    setSelectedModel(null);
    setSubmitted(false);
    setError(null);
    cloneAbortRef.current = true;
  };

  const completedCount = modelResults.filter(r => r.status === "done" || r.status === "error").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc] dark:bg-none dark:bg-black text-foreground font-[family-name:var(--font-geist-sans)] transition-colors duration-500">
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-13">
        <header className="mb-12 flex flex-col items-center text-center">
            <Link 
              href="/"
              className="mb-8 px-6 py-2 bg-emerald-950/5 dark:bg-white/5 text-emerald-950 dark:text-emerald-400 rounded-full text-sm font-bold border border-emerald-950/10 dark:border-emerald-400/20 hover:bg-gold-primary hover:text-emerald-950 transition-all group"
            >
              ← <span className="group-hover:mr-1 transition-all">Back to Home</span>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-emerald-950 dark:text-white">
              Voice Clone <span className="text-gold-primary">Demo</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-xl font-medium">
              {step === "recording" && "Create a high-fidelity digital twin of your voice in just 30 seconds."}
              {step === "transcribing" && "Analyzing your voice sample..."}
              {step === "cloning" && "Cloning your voice across 5 AI models..."}
              {step === "results" && "Compare your cloned voices and pick your favorite."}
            </p>

            <div className="flex items-center gap-3 mt-8">
              {["recording", "transcribing", "cloning", "results"].map((s, i) => {
                const label = s.charAt(0).toUpperCase() + s.slice(1);
                const steps: Step[] = ["recording", "transcribing", "cloning", "results"];
                const currentIdx = steps.indexOf(step);
                const stepIdx = steps.indexOf(s as Step);
                const isActive = stepIdx === currentIdx;
                const isDone = stepIdx < currentIdx;

                return (
                  <React.Fragment key={s}>
                    {i > 0 && (
                      <div className={`w-8 h-0.5 rounded-full transition-colors duration-500 ${isDone ? "bg-emerald-500" : "bg-foreground/10"}`} />
                    )}
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-500 ${
                      isActive ? "bg-gold-primary text-emerald-950 scale-110" : 
                      isDone ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400" :
                      "bg-foreground/5 text-foreground/40"
                    }`}>
                      {isDone ? (
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="w-4 text-center">{i + 1}</span>
                      )}
                      <span className="hidden sm:inline">{label}</span>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
        </header>

        {step === "recording" && (
          <section className="bg-white dark:bg-emerald-950 border border-black/5 dark:border-white/20 rounded-[1.5rem] p-6 md:p-8 shadow-2xl relative overflow-hidden animate-fade-in-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="text-center">
                <h2 className="text-sm font-black uppercase tracking-[0.2em] text-gold-primary mb-4">Reading Script</h2>
                <div className="bg-emerald-50 dark:bg-black/40 p-4 md:p-5 rounded-2xl border border-emerald-100 dark:border-emerald-900/30">
                  <p className="text-lg md:text-lg font-medium leading-relaxed italic text-emerald-950 dark:text-emerald-50">
                    &quot;{script}&quot;
                  </p>
                </div>
              </div>

              <VoiceRecorder onConfirm={handleConfirm} />

              {error && (
                <div className="w-full p-4 bg-red-50 dark:bg-red-950/30 rounded-2xl border border-red-200 dark:border-red-900/50 animate-fade-in-up">
                  <p className="text-red-600 dark:text-red-400 font-bold text-sm">⚠ {error}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { n: 1, h: "Read Clearly", p: "Speak at a natural pace with clear enunciation." },
                  { n: 2, h: "No Long Pauses", p: "Try to keep a steady flow throughout the reading." },
                  { n: 3, h: "Quiet Room", p: "Ensure there is minimal background noise for quality." }
                ].map(item => (
                  <div key={item.n} className="flex flex-col items-center text-center space-y-2">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold">{item.n}</div>
                    <h3 className="font-bold text-sm">{item.h}</h3>
                    <p className="text-xs text-foreground/50">{item.p}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {step === "transcribing" && (
          <section className="bg-white dark:bg-emerald-950 border border-black/5 dark:border-white/20 rounded-[1.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden animate-fade-in-up">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="relative z-10 flex flex-col items-center gap-8 text-center">
              <div className="relative w-28 h-28">
                <div className="absolute inset-0 rounded-full border-4 border-foreground/5"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-gold-primary animate-spin"></div>
                <div className="absolute inset-3 rounded-full bg-white dark:bg-black/30 flex items-center justify-center shadow-inner">
                  <svg className="w-10 h-10 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black text-emerald-950 dark:text-white mb-2">
                  Transcribing Your Voice
                </h2>
                <p className="text-foreground/60 font-medium max-w-md">
                  Using OpenAI Whisper to analyze your speech patterns and generate a transcription...
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-foreground/40">
                <div className="w-2 h-2 rounded-full bg-gold-primary animate-pulse"></div>
                Processing audio sample
              </div>
            </div>
          </section>
        )}

        {step === "cloning" && (
          <section className="animate-fade-in-up">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-emerald-950 dark:text-white mb-2">Cloning in Progress</h2>
              <p className="text-foreground/60 font-medium">{completedCount} of {MODELS.length} models complete</p>
              <div className="w-full max-w-md mx-auto mt-4 h-2 bg-foreground/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-gold-primary to-emerald-500 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${(completedCount / MODELS.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MODELS.map((model, i) => {
                const result = modelResults.find(r => r.id === model.id);
                return (
                  <div
                    key={model.id}
                    className="bg-white dark:bg-emerald-950 border border-black/5 dark:border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden animate-fade-in-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${model.gradient} ${result?.status === "done" ? "opacity-100" : result?.status === "error" ? "opacity-0" : "opacity-30"} transition-opacity`} />
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${model.gradient} shadow-lg flex items-center justify-center overflow-hidden`}>
                        <img src={model.icon} alt={model.name} className="w-6 h-6 object-contain" />
                      </div>
                      <div>
                        <h3 className="font-black text-sm text-emerald-950 dark:text-white">{model.name}</h3>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">
                          {result?.status === "loading" ? "Processing..." : result?.status === "done" ? "Complete" : result?.status === "error" ? "Failed" : "Queued"}
                        </p>
                      </div>
                      <div className="ml-auto">
                        {result?.status === "loading" && <div className="w-6 h-6 rounded-full border-2 border-foreground/10 border-t-gold-primary animate-spin" />}
                        {result?.status === "done" && <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center"><svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></div>}
                        {result?.status === "error" && <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center"><svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></div>}
                      </div>
                    </div>
                    {result?.status === "loading" && <div className="h-1.5 bg-foreground/5 rounded-full overflow-hidden"><div className="h-full w-1/2 bg-gold-primary/60 rounded-full animate-clone-pulse" /></div>}
                    {result?.status === "error" && <p className="text-xs text-red-500 font-medium truncate">{result.error}</p>}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {step === "results" && (
          <section className="animate-fade-in-up">
            <div className="bg-white dark:bg-emerald-950 border-2 border-gold-primary/40 rounded-2xl p-6 md:p-8 shadow-2xl mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-primary/10 rounded-full blur-3xl -mr-24 -mt-24"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold-primary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-black text-lg text-emerald-950 dark:text-white">Your Original Recording</h3>
                    <p className="text-xs text-foreground/50 font-medium">Reference voice sample</p>
                  </div>
                </div>
                {originalAudioUrl && <div className="bg-emerald-50 dark:bg-black/30 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900/20"><audio src={originalAudioUrl} controls className="w-full h-10" /></div>}
                {transcription && <div className="mt-4 p-3 bg-foreground/[0.03] rounded-xl border border-foreground/5"><p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-1">Transcription</p><p className="text-sm text-foreground/70 italic">&quot;{transcription}&quot;</p></div>}
              </div>
            </div>

            <div className="text-center mb-8 p-4 bg-emerald-50/50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-100 dark:border-emerald-900/20">
              <p className="text-xs font-black uppercase tracking-widest text-foreground/40 mb-2">Each model says:</p>
              <p className="text-sm md:text-base font-medium italic text-emerald-950 dark:text-emerald-50">&quot;{OUTPUT_TEXT}&quot;</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {MODELS.map((model, i) => {
                const result = modelResults.find(r => r.id === model.id);
                const isSelected = selectedModel === model.id;
                const isAvailable = result?.status === "done";
                return (
                  <div
                    key={model.id}
                    onClick={() => isAvailable && setSelectedModel(model.id)}
                    className={`bg-white dark:bg-emerald-950 rounded-2xl p-6 shadow-xl relative overflow-hidden transition-all duration-300 animate-fade-in-up ${isAvailable ? "cursor-pointer hover:scale-[1.02]" : "opacity-60"} ${isSelected ? "border-2 border-gold-primary ring-4 ring-gold-primary/20 scale-[1.02]" : "border border-black/5 dark:border-white/10"}`}
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${model.gradient}`} />
                    {isSelected && <div className="absolute top-3 right-3 px-2 py-1 bg-gold-primary text-emerald-950 text-[10px] font-black rounded-full uppercase tracking-wider animate-fade-in-up">★ Selected</div>}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${model.gradient} shadow-lg flex items-center justify-center overflow-hidden`}><img src={model.icon} alt={model.name} className="w-7 h-7 object-contain" /></div>
                      <div>
                        <h3 className="font-black text-emerald-950 dark:text-white">{model.name}</h3>
                        <p className={`text-[10px] font-bold uppercase tracking-widest ${result?.status === "done" ? "text-emerald-500" : "text-red-500"}`}>{result?.status === "done" ? "✓ Ready to play" : "✗ Generation failed"}</p>
                      </div>
                    </div>
                    {result?.status === "done" && result.audioUrl && <div className="bg-emerald-50 dark:bg-black/30 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900/20"><audio src={result.audioUrl} controls className="w-full h-10" onClick={(e) => e.stopPropagation()} /></div>}
                    {result?.status === "error" && <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-200 dark:border-red-900/30"><p className="text-xs text-red-500 font-medium">{result.error}</p></div>}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={handleStartOver} className="px-8 py-3 bg-white/50 dark:bg-white/10 text-emerald-950 dark:text-white rounded-xl font-bold text-sm border border-black/5 dark:border-white/10 transition-all hover:scale-105 shadow-sm">← Start Over</button>
              <button onClick={handleSubmitVote} disabled={!selectedModel} className={`px-10 py-4 rounded-xl font-black text-sm transition-all shadow-lg flex items-center gap-3 ${selectedModel ? "bg-gold-primary text-emerald-950 hover:scale-105 cursor-pointer" : "bg-foreground/10 text-foreground/30 cursor-not-allowed"}`}>
                {submitted ? (<><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Vote Submitted!</>) : (<>Submit Vote{selectedModel && <span className="text-xs font-bold opacity-70">{MODELS.find(m => m.id === selectedModel)?.name}</span>}</>)}
              </button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
