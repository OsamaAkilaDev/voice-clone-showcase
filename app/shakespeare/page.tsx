import ShakespeareTable from "../components/ShakespeareTable";
import Link from "next/link";
import ModelStats from "../components/ModelStats";
import { calculateAverages } from "../lib/statistics";
import { shakespeareEntries } from "../data/shakespeare";

export default function ShakespearePage() {
  const averages = calculateAverages(shakespeareEntries);

  return (
    <div className="flex flex-col items-center h-screen p-4 md:p-8 bg-background text-foreground font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <header className="w-full max-w-[95%] flex flex-col md:flex-row items-center justify-between gap-6 mb-8 bg-emerald-50 dark:bg-white/5 p-5 rounded-[1rem] shadow-xl flex-shrink-0">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-xl font-bold tracking-tight text-foreground">Shakespeare Voice Comparison</h1>
          <p className="text-foreground/70 text-sm">
            Performance analysis of <span className="text-emerald-600 dark:text-emerald-400 font-bold">Qwen</span>, <span className="text-emerald-600 dark:text-emerald-400 font-bold">Chatterbox</span>, and <span className="text-emerald-600 dark:text-emerald-400 font-bold">Turbo</span> on the Shakespeare custom voice.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            href="/"
            className="px-6 py-2.5 bg-white/50 dark:bg-black/20 hover:bg-gold-primary hover:text-emerald-950 text-foreground rounded-full text-sm font-bold transition-all shadow-md group border border-foreground/5"
          >
            ← <span className="group-hover:mr-1 transition-all">Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="w-full max-w-[95%] flex-1 overflow-hidden flex flex-col">
        <ModelStats averages={averages} />
        <ShakespeareTable />
      </main>
    </div>
  );
}
