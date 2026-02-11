import RecordingTable from "../components/RecordingTable";
import Link from "next/link";

export default function ListPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 md:p-8 bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      <header className="w-full max-w-[95%] flex flex-col md:flex-row items-center justify-between gap-6 mb-2 bg-emerald-50 dark:bg-white/5 p-5 rounded-[1rem] shadow-xl">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-xl font-bold tracking-tight text-foreground">TTS Voice Comparison</h1>
          <p className="text-foreground/70 text-sm">
            Analysis of <span className="text-emerald-600 dark:text-emerald-400 font-bold">5 elite models</span> across complex datasets.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            href="/"
            className="px-6 py-2.5 bg-white/50 dark:bg-black/20 hover:bg-gold-primary hover:text-emerald-950 text-foreground rounded-full text-sm font-bold transition-all shadow-md group border border-foreground/5"
          >
            ← <span className="group-hover:mr-1 transition-all">Back to Home</span>
          </Link>
          <div className="px-5 py-2.5 bg-emerald-950 text-white rounded-full text-sm font-black shadow-lg">
            Live Database
          </div>
        </div>
      </header>

      <main className="w-full max-w-[95%]">
        <RecordingTable />
      </main>

      {/* <footer className="w-full max-w-[95%] py-8 mt-12 text-center border-t border-foreground/5 text-foreground/30 font-bold text-sm">
        &copy; {new Date().getFullYear()} Voice Clone Showcase. Built for testing voice cloning models.
      </footer> */}
    </div>
  );
}
