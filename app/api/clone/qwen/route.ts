import { NextRequest, NextResponse } from "next/server";
import { Buffer } from "buffer";
import WebSocket, { RawData } from "ws"; 
import { toMonoWav, ffmpegProcess } from "../../../lib/audioUtils";

// ─── Qwen (DashScope) Voice Cloning Route ───
const BASE_URL = "https://dashscope-intl.aliyuncs.com/api/v1";
const MODEL_VOICE_CLONE = "qwen3-tts-vc-realtime-2026-01-15"; 
// CRITICAL: Use the realtime TTS WebSocket endpoint with model as query parameter
const WS_URL = `wss://dashscope-intl.aliyuncs.com/api-ws/v1/realtime?model=${MODEL_VOICE_CLONE}`;

export const maxDuration = 120; 

export async function POST(request: NextRequest) {
  const apiKey = process.env.DASHSCOPE_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "API Key missing" }, { status: 500 });

  try {
    const formData = await request.formData();
    const audioFile = formData.get("audio") as File | null;
    const text = (formData.get("text") as string) || null;
    const referenceText = (formData.get("referenceText") as string) || text;

    if (!audioFile || !text) {
      return NextResponse.json({ error: "Missing 'audio' or 'text'" }, { status: 400 });
    }

    // ─── PHASE 1: Enrollment ───
    console.log(`🎤 Qwen: Starting Enrollment...`);
    const rawAudioBuffer = Buffer.from(await audioFile.arrayBuffer());
    
    // 1. Convert to 16kHz Mono WAV (Strict Requirement for Enrollment)
    const enrollmentWavBuffer = await toMonoWav(rawAudioBuffer, 16000);
    const dataUri = `data:audio/wav;base64,${enrollmentWavBuffer.toString("base64")}`;

    // 2. Generate Alphanumeric Name (No hyphens allowed)
    const uniqueName = `qwen${Date.now().toString().slice(-10)}`; 

    // 3. Call REST API
    const enrollResp = await fetch(`${BASE_URL}/services/audio/tts/customization`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "qwen-voice-enrollment",
        input: {
          action: "create",
          target_model: MODEL_VOICE_CLONE,
          preferred_name: uniqueName, 
          audio: { data: dataUri },
          text: referenceText,
        },
      }),
    });

    if (!enrollResp.ok) {
      const err = await enrollResp.text();
      throw new Error(`Enrollment API failed: ${err}`);
    }

    const enrollData = await enrollResp.json();
    const voiceId = enrollData.output?.voice;
    if (!voiceId) throw new Error("No voice ID returned");

    console.log(`✅ Enrolled Voice ID: ${voiceId}`);

    // ─── PHASE 2: Synthesis (WebSocket - Realtime TTS Protocol) ───
    const rawPcmChunks: Buffer[] = [];

    await new Promise<void>((resolve, reject) => {
      const ws = new WebSocket(WS_URL, {
        headers: { Authorization: `Bearer ${apiKey}` },
      });

      const timeout = setTimeout(() => {
        ws.terminate();
        reject(new Error("WebSocket timed out (60s)"));
      }, 60000);

      ws.on("open", () => {
        console.log("🔌 WS Connected. Sending session.update event...");

        // CORRECT PROTOCOL: Qwen TTS Realtime uses session-based protocol
        // Step 1: Update session configuration
        const sessionUpdate = {
          type: "session.update",
          event_id: `event_${Date.now()}`,
          session: {
            mode: "server_commit",  // Server intelligently handles segmentation
            voice: voiceId,         // Use the cloned voice
            response_format: "pcm", // Raw PCM format
            sample_rate: 24000,     // 24kHz output
            volume: 50,             // 0-100
            speech_rate: 1.0,       // 0.5-2.0
          }
        };

        console.log("📤 Sending session.update:", JSON.stringify(sessionUpdate, null, 2));
        ws.send(JSON.stringify(sessionUpdate));

        // Step 2: Wait a bit for session.updated, then send text
        setTimeout(() => {
          console.log("📝 Appending text to buffer...");
          const appendText = {
            type: "input_text_buffer.append",
            event_id: `event_${Date.now()}`,
            text: text
          };
          ws.send(JSON.stringify(appendText));

          // Step 3: Finish session (triggers synthesis in server_commit mode)
          setTimeout(() => {
            console.log("🏁 Finishing session...");
            const finishSession = {
              type: "session.finish",
              event_id: `event_${Date.now()}`
            };
            ws.send(JSON.stringify(finishSession));
          }, 100);
        }, 200);
      });

      ws.on("message", (data: RawData, isBinary: boolean) => {
        if (isBinary) {
          // 🔊 AUDIO DATA (Binary Frame) - This should NOT happen in Qwen TTS protocol
          console.warn("⚠️ Received unexpected binary data");
          rawPcmChunks.push(Buffer.from(data as Buffer));
        } else {
          // 📝 CONTROL DATA (JSON Frame)
          try {
            const msg = JSON.parse(data.toString());
            const eventType = msg.type;
            
            console.log(`📨 Received event: ${eventType}`);

            // Handle different event types
            switch (eventType) {
              case "error":
                console.error("❌ Error event:", msg.error);
                clearTimeout(timeout);
                ws.close();
                reject(new Error(msg.error?.message || "Unknown error"));
                break;

              case "session.created":
                console.log(`✅ Session created: ${msg.session?.id}`);
                break;

              case "session.updated":
                console.log(`✅ Session updated: ${msg.session?.id}`);
                break;

              case "response.created":
                console.log(`🎙️ Response created: ${msg.response?.id}`);
                break;

              case "response.audio.delta":
                // AUDIO DATA comes as base64 in 'delta' field
                const audioBase64 = msg.delta;
                if (audioBase64) {
                  const audioBuffer = Buffer.from(audioBase64, 'base64');
                  rawPcmChunks.push(audioBuffer);
                  console.log(`🔊 Received audio chunk: ${audioBuffer.length} bytes`);
                }
                break;

              case "response.audio.done":
                console.log("✅ Audio generation completed");
                break;

              case "response.done":
                console.log("✅ Response completed");
                break;

              case "session.finished":
                console.log(`🏁 Session finished. Received ${rawPcmChunks.length} audio chunks.`);
                clearTimeout(timeout);
                ws.close();
                resolve();
                break;

              default:
                console.log(`ℹ️ Unhandled event type: ${eventType}`);
            }
          } catch (e) {
            console.error("WS Parse error:", e);
          }
        }
      });

      ws.on("close", (code, reason) => {
        console.log(`🔌 WS Closed. Code: ${code}, Reason: ${reason}`);
        clearTimeout(timeout);
        if (rawPcmChunks.length > 0) {
          resolve();
        } else {
          reject(new Error(`WS Closed without audio. Code: ${code} Reason: ${reason}`));
        }
      });

      ws.on("error", (err: Error) => {
        console.error("❌ WS Network Error:", err);
        clearTimeout(timeout);
        reject(err);
      });
    });

    if (rawPcmChunks.length === 0) {
      throw new Error("No audio chunks received.");
    }

    console.log(`🔊 Processing ${rawPcmChunks.length} chunks...`);

    // ─── PHASE 3: Output (FFmpeg) ───
    const combinedPcm = Buffer.concat(rawPcmChunks);
    
    // FFmpeg: Raw PCM (24k) -> WAV Container (24k)
    // Filters: Speed 1.1x, Vol 4.5x
    const wavBuffer = await ffmpegProcess(
      combinedPcm,
      ["-f", "s16le", "-ar", "24000", "-ac", "1"], 
      [
        "-af", "atempo=1.1,volume=4.5",
        "-f", "wav",
        "-acodec", "pcm_s16le"
      ]
    );

    return new NextResponse(new Uint8Array(wavBuffer), {
      status: 200,
      headers: {
        "Content-Type": "audio/wav",
        "Content-Disposition": `inline; filename="qwen-clone-${voiceId}.wav"`,
      },
    });

  } catch (err: any) {
    console.error("🚨 Route Error:", err);
    return NextResponse.json(
      { error: err.message || "Internal Server Error" }, 
      { status: 500 }
    );
  }
}