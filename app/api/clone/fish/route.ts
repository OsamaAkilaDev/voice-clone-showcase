import { NextRequest, NextResponse } from "next/server";
import { Buffer } from "buffer";
import { toMonoWav } from "../../../lib/audioUtils";
import { encode } from "@msgpack/msgpack";

// ─── Fish Audio Voice Cloning Route ───
// Uses Fish Audio TTS API with inline reference audio
// Env vars: FISH_API_KEY

const FISH_TTS_URL = "https://api.fish.audio/v1/tts";

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  const apiKey = process.env.FISH_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "FISH_API_KEY not configured" },
      { status: 500 }
    );
  }

  try {
    const formData = await request.formData();
    const audioFile = formData.get("audio") as File | null;
    const text = formData.get("text") as string | null;
    const referenceText = formData.get("referenceText") as string | null;

    if (!audioFile || !text) {
      return NextResponse.json(
        { error: "Missing 'audio' file or 'text' field" },
        { status: 400 }
      );
    }

    console.log(`🐟 Fish: Processing request for text: "${text.substring(0, 20)}..."`);

    // Build the request payload for Fish Audio
    // Fish Audio accepts a JSON body with base64 reference audio
    const rawAudioBuffer = Buffer.from(await audioFile.arrayBuffer());
    
    // Ensure clean 16kHz WAV format (Mono, 16-bit)
    const cleanWavBuffer = await toMonoWav(rawAudioBuffer); // defaults to 16000
    
    // MsgPack supports binary data (Uint8Array/Buffer) natively.
    // Fish Audio expects raw bytes for efficiency when using MsgPack.
    const payload = {
      text: text,
      format: "wav",
      references: [
        {
          audio: cleanWavBuffer, // Send buffer directly!
          text: referenceText || text, 
        },
      ],
    };

    // Serialize to MessagePack
    const msgpackBody = encode(payload);

    const fishResp = await fetch(FISH_TTS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/msgpack", // Critical change
      },
      body: msgpackBody,
    });

    if (!fishResp.ok) {
      const errText = await fishResp.text();
      console.error(`❌ Fish Audio Error: ${fishResp.status} ${errText}`);
      return NextResponse.json(
        { error: `Fish Audio API error: ${errText}` },
        { status: 502 }
      );
    }

    // Stream the audio response back
    const audioData = await fishResp.arrayBuffer();

    return new NextResponse(new Uint8Array(audioData), {
      status: 200,
      headers: {
        "Content-Type": "audio/wav",
        "Content-Disposition": 'inline; filename="clone-fish.wav"',
      },
    });
  } catch (err) {
    console.error("Fish Audio clone error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  }
}
