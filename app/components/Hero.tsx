'use client';

import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden flex flex-col items-center text-center px-4 w-full">
      {/* Background blobs for aesthetic */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-emerald-400/20 dark:bg-emerald-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 dark:opacity-40 animate-blob"></div>
      <div className="absolute top-0 -right-20 w-[500px] h-[500px] bg-gold-primary/20 dark:bg-gold-primary rounded-full mix-blend-multiply filter blur-[120px] opacity-30 dark:opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-24 left-40 w-[500px] h-[500px] bg-cyan-400/20 dark:bg-cyan-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-30 dark:opacity-40 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-emerald-600 via-gold-primary to-amber-600 dark:from-emerald-400 dark:via-gold-primary dark:to-amber-500 drop-shadow-2xl">
          Voice Cloning <br/> Experiments
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-10 leading-tight font-medium max-w-2xl mx-auto">
         We go the best 5 models for <span className="text-emerald-600 dark:text-emerald-400 font-bold">voice cloning</span>. Help us decide which one of them does it best.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/list"
            className="px-8 py-3 bg-gold-primary text-emerald-950 rounded-xl font-black text-lg hover:scale-105 transition-all shadow-[0_10px_30px_rgba(252,194,27,0.3)] hover:shadow-gold-primary/50 flex justify-center items-center gap-2 group"
          >
            Browse Cloned Voices
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link 
             href="/clone"
             className="px-8 py-3 bg-emerald-950/5 dark:bg-white/10 backdrop-blur-md text-emerald-950 dark:text-white rounded-xl font-black text-lg hover:bg-emerald-950/10 dark:hover:bg-white/20 transition-all shadow-md flex justify-center items-center border border-emerald-950/10 dark:border-transparent"
          >
            Clone Your Own Voice
          </Link>
        </div>
        <div className="flex justify-center items-center mt-4">
          <Link 
             href="/shakespeare"
             className="px-8 py-3 bg-emerald-950/5 dark:bg-emerald-400 backdrop-blur-md text-emerald-950 dark:text-black rounded-xl font-black text-lg hover:bg-emerald-950/10 dark:hover:bg-emerald-500 transition-all shadow-md flex justify-center items-center border border-emerald-950/10 dark:border-transparent"
          >
            Shakespeare Voice Comparison
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
