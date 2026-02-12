import { NextRequest, NextResponse } from "next/server";

// ─── OpenAI Whisper Speech-to-Text Route ───
// Accepts an audio file via FormData and returns the transcription text
// Env vars: OPENAI_API_KEY

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API Key missing" }, { status: 500 });
  }

  try {
    const formData = await request.formData();
    const audioFile = formData.get("audio") as File | null;

    if (!audioFile || audioFile.size === 0) {
      return NextResponse.json({ error: "Empty or missing audio file" }, { status: 400 });
    }

    // 1. Create a clean Buffer from the file
    // Some serverless environments struggle with raw File objects in FormData
    const arrayBuffer = await audioFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 2. Re-wrap it in a Blob with a clear type
    const audioBlob = new Blob([buffer], { type: audioFile.type });

    const whisperForm = new FormData();
    
    // 3. Crucial: Ensure the filename matches the actual mime type
    // If it's audio/webm, the filename MUST end in .webm
    const extension = audioFile.type.split("/")[1] || "webm";
    const fileName = `input.${extension}`;

    whisperForm.append("file", audioBlob, fileName);
    whisperForm.append("model", "gpt-4o-transcribe");
    whisperForm.append("response_format", "json");

    const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        // Note: Do NOT set 'Content-Type' header manually. 
        // Let the browser/server set the boundary.
      },
      body: whisperForm,
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.error?.message || "API Error" }, { status: response.status });
    }

    return NextResponse.json({ text: data.text });
  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}