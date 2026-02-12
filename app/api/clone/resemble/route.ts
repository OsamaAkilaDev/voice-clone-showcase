import { NextRequest, NextResponse } from "next/server";
import { Buffer } from "buffer";

// ─── Resemble.ai Chatterbox Voice Cloning Route ───
// Flow: auto-find/create project → create rapid voice → upload recording → build → poll → generate clip → delete voice
// Env vars: RESEMBLE_API_KEY

const RESEMBLE_BASE = "https://app.resemble.ai/api/v2";

export const maxDuration = 120; // Can take up to 2 min due to voice build step

// Cache the project UUID so we only look it up once per server lifecycle
let cachedProjectUuid: string | null = null;

/** Find or create the "TTS Integration Project" — mirrors the Python setup_resemble() */
async function getProjectUuid(apiKey: string): Promise<string> {
  if (cachedProjectUuid) return cachedProjectUuid;

  const headers = {
    Authorization: `Token token=${apiKey}`,
    "Content-Type": "application/json",
  };

  // 1. List existing projects and look for our project
  const listResp = await fetch(`${RESEMBLE_BASE}/projects?page=1&page_size=50`, {
    headers,
  });

  if (!listResp.ok) {
    throw new Error(`Failed to list Resemble projects: ${await listResp.text()}`);
  }

  const listData = await listResp.json();
  const projects = listData.items || [];
  const existing = projects.find(
    (p: { name: string }) => p.name === "TTS Integration Project"
  );

  if (existing) {
    cachedProjectUuid = existing.uuid;
    console.log(`✅ Resemble: using existing project ${cachedProjectUuid}`);
    return cachedProjectUuid!;
  }

  // 2. Project doesn't exist — create it
  const createResp = await fetch(`${RESEMBLE_BASE}/projects`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      name: "TTS Integration Project",
      description: "Project for automated TTS generation",
    }),
  });

  if (!createResp.ok) {
    throw new Error(`Failed to create Resemble project: ${await createResp.text()}`);
  }

  const createData = await createResp.json();
  if (!createData.success) {
    throw new Error(`Resemble project creation failed: ${JSON.stringify(createData)}`);
  }

  cachedProjectUuid = createData.item.uuid;
  console.log(`✅ Resemble: created new project ${cachedProjectUuid}`);
  return cachedProjectUuid!;
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEMBLE_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "RESEMBLE_API_KEY not configured" },
      { status: 500 }
    );
  }


  const headers = {
    Authorization: `Token token=${apiKey}`,
    "Content-Type": "application/json",
  };

  let voiceUuid: string | null = null;

  try {
    // Resolve project UUID (auto-discovers or creates)
    const projectUuid = await getProjectUuid(apiKey);

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

    // 1. Create a rapid voice
    const voiceName = `browser-chatterbox-${Date.now()}`;
    const consentString =
      "I give my consent to Resemble AI to use my voice for cloning and synthesis.";

    const createVoiceResp = await fetch(`${RESEMBLE_BASE}/voices`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        name: voiceName,
        consent: consentString,
        voice_type: "rapid",
      }),
    });

    if (!createVoiceResp.ok) {
      const errText = await createVoiceResp.text();
      return NextResponse.json(
        { error: `Failed to create voice: ${errText}` },
        { status: 502 }
      );
    }

    const createVoiceData = await createVoiceResp.json();
    if (!createVoiceData.success) {
      return NextResponse.json(
        { error: `Voice creation failed: ${JSON.stringify(createVoiceData)}` },
        { status: 502 }
      );
    }

    voiceUuid = createVoiceData.item.uuid;

    let audioData: Uint8Array | null = null;

    try {
      // 2. Audio is already 16kHz Mono WAV from frontend!
      const rawAudioBuffer = Buffer.from(await audioFile.arrayBuffer());
      const cleanWavBuffer = rawAudioBuffer;
      
      const uploadFormData = new FormData();
      uploadFormData.append("name", "browser_recording");
      uploadFormData.append("text", referenceText || text);
      uploadFormData.append("is_active", "true");
      uploadFormData.append("emotion", "neutral");
      // Append WAV as file
      uploadFormData.append("file", new Blob([new Uint8Array(cleanWavBuffer)], { type: "audio/wav" }), "recording.wav");

      const uploadResp = await fetch(
        `${RESEMBLE_BASE}/voices/${voiceUuid}/recordings`,
        {
          method: "POST",
          headers: {
             Authorization: headers.Authorization,
             // Content-Type managed by fetch for FormData (boundary)
          },
          body: uploadFormData,
        }
      );

      if (!uploadResp.ok) {
        const errText = await uploadResp.text();
        throw new Error(`Failed to upload recording: ${errText}`);
      }

      const uploadData = await uploadResp.json();
      if (!uploadData.success) {
        throw new Error(`Recording upload failed: ${JSON.stringify(uploadData)}`);
      }

      // 3. Build the voice
      await fetch(`${RESEMBLE_BASE}/voices/${voiceUuid}/build`, {
        method: "POST",
        headers,
      });

      // 4. Poll until voice is ready (max 30 attempts × 5s = 150s)
      let voiceReady = false;
      for (let attempt = 0; attempt < 30; attempt++) {
        await sleep(5000);

        const statusResp = await fetch(
          `${RESEMBLE_BASE}/voices/${voiceUuid}`,
          { headers }
        );

        if (statusResp.ok) {
          const statusData = await statusResp.json();
          const item = statusData.item || {};
          const status = item.status || item.voice_status;

          if (
            status === "processed" ||
            status === "finished" ||
            status === "ready" ||
            status === "Ready"
          ) {
            voiceReady = true;
            break;
          }
        }
      }

      if (!voiceReady) {
        throw new Error("Voice build timed out");
      }

      // 5. Generate clip (synchronous)
      const clipResp = await fetch(
        `${RESEMBLE_BASE}/projects/${projectUuid}/clips`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({
            voice_uuid: voiceUuid,
            body: text,
            is_public: false,
            is_archived: false,
            sample_rate: 22050,
            output_format: "wav",
            raw: true, // request raw audio in response
          }),
        }
      );

      if (!clipResp.ok) {
        const errText = await clipResp.text();
        throw new Error(`Clip generation failed: ${errText}`);
      }

      const clipData = await clipResp.json();
      if (!clipData.success) {
        throw new Error(`Clip generation failed: ${JSON.stringify(clipData)}`);
      }

      // 6. Get the audio data from the clip response
      const clipItem = clipData.item || clipData;
      
      // Try various response formats
      const possibleKeys = [
        "audio_content",
        "link",
        "url",
        "audio_src",
        "audio",
      ];
      for (const key of possibleKeys) {
        const content = clipItem[key];
        if (!content) continue;

        if (typeof content === "string" && content.startsWith("http")) {
          // Download from URL
          const dlResp = await fetch(content);
          if (dlResp.ok) {
            audioData = new Uint8Array(await dlResp.arrayBuffer());
          }
          break;
        } else if (typeof content === "string") {
          // Try base64 decode
          try {
            const decoded = Buffer.from(content, "base64");
            if (decoded.length < 500) {
              continue;
            }
            audioData = new Uint8Array(decoded);
          } catch {
            continue;
          }
          break;
        }
      }

      if (!audioData || audioData.length < 500) {
        throw new Error("No valid audio data in clip response");
      }

    } finally {
      // 7. Cleanup: Delete the temporary voice regardless of success/error
      if (voiceUuid) {
        console.log(`🧹 Cleanup: Deleting Resemble voice ${voiceUuid}`);
        await fetch(`${RESEMBLE_BASE}/voices/${voiceUuid}`, {
          method: "DELETE",
          headers,
        }).catch(err => console.error("Failed to delete voice:", err));
      }
    }
    
    return new Response(audioData as unknown as BodyInit, {
      status: 200,

      headers: {
        "Content-Type": "audio/wav",
        "Content-Disposition": 'inline; filename="clone-resemble.wav"',
      },
    });
  } catch (err) {
    console.error("Resemble Chatterbox clone error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal server error" },
      { status: 500 }
    );
  } finally {
    // Safety: always clean up voice if it wasn't already deleted
    if (voiceUuid) {
      try {
        await fetch(`${RESEMBLE_BASE}/voices/${voiceUuid}`, {
          method: "DELETE",
          headers,
        });
      } catch {
        // ignore cleanup errors
      }
    }
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
