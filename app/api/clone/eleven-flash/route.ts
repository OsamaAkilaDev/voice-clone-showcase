import { NextRequest, NextResponse } from "next/server";

// ─── ElevenLabs v2.5 Flash Voice Cloning Route ───
// Model: eleven_flash_v2_5
// Flow: create IVC voice → generate TTS → delete voice → return MP3
// Env vars: ELEVENLABS_API_KEY

const ELEVEN_BASE = "https://api.elevenlabs.io/v1";

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "ELEVENLABS_API_KEY not configured" },
      { status: 500 }
    );
  }

  let voiceId: string | null = null;

  try {
    const formData = await request.formData();
    const audioFile = formData.get("audio") as File | null;
    const text = formData.get("text") as string | null;

    if (!audioFile || !text) {
      return NextResponse.json(
        { error: "Missing 'audio' file or 'text' field" },
        { status: 400 }
      );
    }

    // 1. Create Instant Voice Clone
    const voiceName = `browser-clone-flash-${Date.now()}`;
    const addVoiceForm = new FormData();
    addVoiceForm.append("name", voiceName);
    addVoiceForm.append("description", "Temporary browser voice clone (flash)");
    addVoiceForm.append("files", audioFile, audioFile.name || "recording.wav");

    const addResp = await fetch(`${ELEVEN_BASE}/voices/add`, {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
      },
      body: addVoiceForm,
    });

    if (!addResp.ok) {
      const errText = await addResp.text();
      return NextResponse.json(
        { error: `Voice creation failed: ${errText}` },
        { status: 502 }
      );
    }

    const addData = await addResp.json();
    voiceId = addData.voice_id;

    if (!voiceId) {
      return NextResponse.json(
        { error: "No voice_id returned from ElevenLabs" },
        { status: 502 }
      );
    }

    // 2. Generate TTS with Flash model
    const ttsResp = await fetch(
      `${ELEVEN_BASE}/text-to-speech/${voiceId}`,
      {
        method: "POST",
        headers: {
          "xi-api-key": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
          model_id: "eleven_flash_v2_5",
        }),
      }
    );

    if (!ttsResp.ok) {
      const errText = await ttsResp.text();
      return NextResponse.json(
        { error: `TTS generation failed: ${errText}` },
        { status: 502 }
      );
    }

    const audioData = await ttsResp.arrayBuffer();

    // 3. Delete temporary voice (fire and forget)
    await deleteVoice(apiKey, voiceId, voiceName);
    voiceId = null; // prevent double-delete in finally

    return new NextResponse(new Uint8Array(audioData), {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition": 'inline; filename="clone-eleven-flash.mp3"',
      },
    });
  } catch (err) {
    console.error("ElevenLabs Flash clone error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  } finally {
    // Safety: always clean up voice if it wasn't already deleted
    if (voiceId) {
      const apiKey = process.env.ELEVENLABS_API_KEY;
      if (apiKey) {
        deleteVoice(apiKey, voiceId).catch(() => {});
      }
    }
  }
}

/** Delete a voice with safety name-check (like the notebook does) */
async function deleteVoice(
  apiKey: string,
  voiceId: string,
  expectedName?: string
) {
  try {
    if (expectedName) {
      // Safety guard: verify the voice name before deleting
      const getResp = await fetch(`${ELEVEN_BASE}/voices/${voiceId}`, {
        headers: { "xi-api-key": apiKey },
      });
      if (getResp.ok) {
        const voiceInfo = await getResp.json();
        if (voiceInfo.name !== expectedName) {
          console.warn(
            `Safety abort: voice name mismatch. Expected "${expectedName}", got "${voiceInfo.name}"`
          );
          return;
        }
      }
    }

    await fetch(`${ELEVEN_BASE}/voices/${voiceId}`, {
      method: "DELETE",
      headers: { "xi-api-key": apiKey },
    });
  } catch (err) {
    console.warn("Failed to delete voice:", err);
  }
}
