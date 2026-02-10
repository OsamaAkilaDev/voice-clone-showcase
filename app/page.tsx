import RecordingTable from "./components/RecordingTable";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">TTS Model Showcase</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Comparing voice synthesis models: Original vs Qwen vs Fish Audio
        </p>
      </header>
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-[95%]">
        <RecordingTable />
      </main>
    </div>
  );
}
