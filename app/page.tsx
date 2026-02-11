import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";

export default function Home() {
  const models = [
    {
      title: "Qwen",
      description: "Advanced multilingual voice cloning optimized for natural prosody and emotional depth across various languages.",
      icon: "/logos/Qwen_logo.png",
      color: "bg-gradient-to-br from-indigo-500 via-indigo-600 to-blue-700 shadow-indigo-500/40"
    },
    {
      title: "Fish Audio",
      description: "High-performance TTS with exceptional clarity and low latency, perfect for real-time applications and expressive clones.",
      icon: "/logos/fish-audio-logo.png",
      color: "bg-gradient-to-br from-rose-500 via-rose-600 to-pink-700 shadow-rose-500/40"
    },
    {
      title: "ElevenLabs (v2.5)",
      description: "The gold standard in realism. Our normal model delivers unparalleled human-like quality with subtle vocal nuances.",
      icon: "/logos/eleven-labs-logo.png",
      color: "bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 shadow-amber-500/40"
    },
    {
      title: "ElevenLabs (Flash)",
      description: "Speed meets quality. Optimized for instant responses without sacrificing the signature ElevenLabs authenticity.",
      icon: "/logos/eleven-labs-logo.png",
      color: "bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600 shadow-cyan-500/40"
    },
    {
      title: "Resemble.ai",
      description: "Chatterbox technology specialized for consistent voice identity and dynamic range across diverse speech patterns.",
      icon: "/logos/resembleai_logo.jpeg",
      color: "bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 shadow-emerald-500/40"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc] dark:bg-none dark:bg-background text-foreground font-[family-name:var(--font-geist-sans)] transition-colors duration-500">
      <main className="max-w-6xl mx-auto px-6 pb-20">
        <Hero />
        
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-foreground tracking-tighter">AI Models</h2>
            <p className="text-foreground/80 text-lg max-w-xl mx-auto font-medium leading-relaxed">
              We've benchmarked the industry's leading TTS cloners.<br/>Explore how each model interprets the same voice fingerprint
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <FeatureCard {...model} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-32 p-12 md:p-16 rounded-[1.5rem] bg-emerald-50/50 dark:bg-emerald-900/10 text-emerald-950 dark:text-white relative overflow-hidden group shadow-xl border border-emerald-100 dark:border-emerald-900/20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-primary/20 dark:bg-gold-primary/30 rounded-full blur-[120px] -mr-64 -mt-64 group-hover:bg-gold-primary/30 transition-all duration-700"></div>
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-[100px]"></div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter text-emerald-950 dark:text-white">View the Results</h2>
            <p className="text-emerald-900/70 dark:text-emerald-50/80 text-lg md:text-xl mb-12 max-w-2xl font-medium leading-relaxed">
              Compare original recordings against their cloned counterparts across all 5 models in our definitive comparison table.
            </p>
            <a 
              href="/list" 
              className="px-10 py-5 bg-emerald-950 dark:bg-gold-primary hover:bg-emerald-900 dark:hover:bg-white text-white dark:text-emerald-950 rounded-xl font-black text-2xl transition-all hover:scale-105 shadow-xl flex items-center gap-4 group"
            >
              Comparison Table
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>
        </section>
      </main>
      
      {/* <footer className="py-16 mt-32 text-center text-foreground/50 font-black border-t border-foreground/5 bg-white/30 dark:bg-transparent backdrop-blur-sm">
        <p className="text-lg">&copy; {new Date().getFullYear()} Voice Clone Showcase. Elite Synthetic Speech.</p>
      </footer> */}
    </div>
  );
}
