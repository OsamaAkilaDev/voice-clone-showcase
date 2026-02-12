import express from 'express';
import cors from 'cors';
import multer from 'multer';
import dotenv from 'dotenv';
import WebSocket from 'ws';
import msgpack from '@msgpack/msgpack';
import fetch from 'node-fetch';
import FormData from 'form-data';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Setup multer for memory storage
const upload = multer({ storage: multer.memoryStorage() });

// ─── UTILS ───

function pcmToWav(pcm, sampleRate, channels, bitsPerSample) {
  const byteRate = (sampleRate * channels * bitsPerSample) / 8;
  const blockAlign = (channels * bitsPerSample) / 8;
  const dataSize = pcm.length;
  const header = Buffer.alloc(44);

  header.write("RIFF", 0);
  header.writeUInt32LE(36 + dataSize, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(channels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write("data", 36);
  header.writeUInt32LE(dataSize, 40);

  return Buffer.concat([header, pcm]);
}

function applyVolumeGain(pcm, factor) {
  const output = Buffer.alloc(pcm.length);
  for (let i = 0; i < pcm.length; i += 2) {
    if (i + 1 >= pcm.length) break;
    let sample = pcm.readInt16LE(i);
    sample = Math.round(sample * factor);
    sample = Math.max(-32768, Math.min(32767, sample));
    output.writeInt16LE(sample, i);
  }
  return output;
}

// ─── QWEN (ALIBABA) ───

app.post('/api/clone/qwen', upload.single('audio'), async (req, res) => {
  const apiKey = process.env.DASHSCOPE_API_KEY;
  const { text, referenceText } = req.body;
  const audioFile = req.file;

  if (!apiKey || !audioFile || !text) {
    return res.status(400).json({ error: "Missing API key, audio, or text" });
  }

  try {
    console.log(`🎤 Qwen: Starting Enrollment...`);
    const dataUri = `data:audio/wav;base64,${audioFile.buffer.toString("base64")}`;
    const uniqueName = `qwen${Date.now().toString().slice(-10)}`; 

    const enrollResp = await fetch("https://dashscope-intl.aliyuncs.com/api/v1/services/audio/tts/customization", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "qwen-voice-enrollment",
        input: {
          action: "create",
          target_model: "qwen3-tts-vc-realtime-2026-01-15",
          preferred_name: uniqueName, 
          audio: { data: dataUri },
          text: referenceText || text,
        },
      }),
    });

    if (!enrollResp.ok) {
      const errDetail = await enrollResp.text();
      console.error(`❌ Qwen Enrollment Failed: ${errDetail}`);
      throw new Error(`Enrollment failed: ${errDetail}`);
    }
    
    const enrollData = await enrollResp.json();
    const voiceId = enrollData.output?.voice;
    if (!voiceId) {
      console.error(`❌ Qwen Enrollment Response missing voice ID:`, enrollData);
      throw new Error("No voice ID returned from Alibaba");
    }

    console.log(`✅ Qwen Enrolled: ${voiceId}. Starting Synthesis...`);

    const WS_URL = `wss://dashscope-intl.aliyuncs.com/api-ws/v1/realtime?model=qwen3-tts-vc-realtime-2026-01-15`;
    const rawPcmChunks = [];

    await new Promise((resolve, reject) => {
      const ws = new WebSocket(WS_URL, {
        headers: { Authorization: `Bearer ${apiKey}` },
      });

      const timeout = setTimeout(() => {
        ws.close();
        reject(new Error("WebSocket Timeout (60s)"));
      }, 60000);

      ws.on("open", () => {
        ws.send(JSON.stringify({
          type: "session.update",
          event_id: `ev_${Date.now()}`,
          session: { mode: "server_commit", voice: voiceId, response_format: "pcm", sample_rate: 24000 }
        }));
        setTimeout(() => {
          ws.send(JSON.stringify({
            type: "input_text_buffer.append",
            event_id: `ev_${Date.now()}`,
            text: text
          }));
          setTimeout(() => {
            ws.send(JSON.stringify({ type: "session.finish", event_id: `ev_${Date.now()}` }));
          }, 100);
        }, 200);
      });

      ws.on("message", (data) => {
        try {
          const msg = JSON.parse(data.toString());
          if (msg.type === "response.audio.delta") {
            rawPcmChunks.push(Buffer.from(msg.delta, 'base64'));
          } else if (msg.type === "session.finished") {
            clearTimeout(timeout);
            ws.close();
            resolve();
          } else if (msg.type === "error") {
            console.error(`❌ Qwen WS Error Frame:`, msg.error);
            reject(new Error(msg.error?.message || "WS Error"));
          }
        } catch (e) {}
      });

      ws.on("error", (err) => {
        console.error(`❌ Qwen WS Network Error:`, err);
        reject(err);
      });
      
      ws.on("close", () => {
        if (rawPcmChunks.length > 0) resolve();
        else reject(new Error("WebSocket closed without receiving any audio data"));
      });
    });

    const combinedPcm = Buffer.concat(rawPcmChunks);
    const boostedPcm = applyVolumeGain(combinedPcm, 4.5);
    const wavBuffer = pcmToWav(boostedPcm, 24000, 1, 16);

    res.set('Content-Type', 'audio/wav');
    res.send(wavBuffer);

  } catch (err) {
    console.error(`🚨 Qwen Route Fatal:`, err);
    res.status(500).json({ error: err.message });
  }
});

// ─── FISH AUDIO (REST) ───

app.post('/api/clone/fish', upload.single('audio'), async (req, res) => {
  const apiKey = process.env.FISH_API_KEY;
  const { text } = req.body;
  const audioFile = req.file;

  if (!apiKey || !audioFile || !text) return res.status(400).json({ error: "Missing data" });

  try {
    console.log(`🎤 Fish: Generating TTS...`);
    const response = await fetch("https://api.fish.audio/v1/tts", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/msgpack",
      },
      body: Buffer.from(msgpack.encode({
        text,
        reference_id: null,
        references: [{ audio: audioFile.buffer, text: text.slice(0, 100) }],
        format: "wav",
        latency: "normal",
      })),
    });

    if (!response.ok) {
        const errText = await response.text();
        console.error(`❌ Fish API Error: ${errText}`);
        throw new Error(`Fish API Error: ${errText}`);
    }
    
    const audioData = await response.arrayBuffer();
    res.set('Content-Type', 'audio/wav');
    res.send(Buffer.from(audioData));
  } catch (err) {
    console.error(`🚨 Fish Route Fatal:`, err);
    res.status(500).json({ error: err.message });
  }
});

// ─── RESEMBLE.AI ───

app.post('/api/clone/resemble', upload.single('audio'), async (req, res) => {
  const apiKey = process.env.RESEMBLE_API_KEY;
  const { text } = req.body;
  const audioFile = req.file;

  if (!apiKey || !audioFile || !text) return res.status(400).json({ error: "Missing data" });

  try {
    const authHeaders = { Authorization: `Token token=${apiKey}` };

    // Step 0: Ensure we have a Project UUID
    let projectUuid = process.env.RESEMBLE_PROJECT_UUID;
    if (!projectUuid) {
      console.log(`🔍 Resemble: No project UUID in env, fetching first available...`);
      const projResp = await fetch("https://app.resemble.ai/api/v2/projects?page=1", { headers: authHeaders });
      const projData = await projResp.json();
      projectUuid = projData.items?.[0]?.uuid;
      if (!projectUuid) throw new Error("No Resemble project found. Please create one in the dashboard.");
      console.log(`✅ Using Resemble Project: ${projectUuid}`);
    }

    console.log(`🎤 Resemble: Creating Voice...`);
    const form = new FormData();
    form.append("name", `clone-${Date.now()}`);
    form.append("sample", audioFile.buffer, { filename: 'sample.wav', contentType: 'audio/wav' });

    const createResp = await fetch("https://app.resemble.ai/api/v2/voices", {
      method: "POST",
      headers: { ...authHeaders, ...form.getHeaders() },
      body: form
    });
    
    const createData = await createResp.json();
    if (!createResp.ok || !createData.item?.uuid) {
        console.error(`❌ Resemble Voice Creation Failed:`, createData);
        throw new Error(createData.message || "Failed to create Resemble voice");
    }
    
    const voiceUuid = createData.item.uuid;
    console.log(`✅ Resemble Voice Created: ${voiceUuid}. Waiting for build...`);

    // Step 2: Poll for Voice Readiness
    let isReady = false;
    for (let i = 0; i < 15; i++) {
        const statusResp = await fetch(`https://app.resemble.ai/api/v2/voices/${voiceUuid}`, { headers: authHeaders });
        const statusData = await statusResp.json();
        const status = statusData.item?.status;
        console.log(`⏳ Resemble: Voice status is '${status}'...`);
        
        if (status === 'processed') {
            isReady = true;
            break;
        }
        if (status === 'failed') throw new Error("Resemble voice build failed");
        
        await new Promise(r => setTimeout(r, 2000));
    }

    if (!isReady) throw new Error("Resemble voice build timed out (30s)");

    console.log(`🚀 Resemble Voice Ready. Starting Clip Generation...`);

    // Phase 2: Create Clip (V2 Standard)
    const clipResp = await fetch(`https://app.resemble.ai/api/v2/projects/${projectUuid}/clips`, {
      method: "POST",
      headers: { ...authHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ 
        title: `Clip-${Date.now()}`,
        body: text,
        voice_uuid: voiceUuid,
        is_public: false,
        is_archived: false,
        sample_rate: 24000,
        output_format: "wav",
        precision: "PCM_16"
      })
    });
    
    if (!clipResp.ok) {
        const errText = await clipResp.text();
        console.error(`❌ Resemble Clip Creation Failed: ${errText}`);
        throw new Error(`Resemble Clip Failed: ${errText}`);
    }
    
    const clipData = await clipResp.json();
    let audioUrl = clipData.item?.link || clipData.item?.audio_src;
    
    // If it's still being processed, wait a moment (simple polling)
    if (!audioUrl) {
      console.log("⏳ Resemble: Clip is processing, waiting...");
      const clipUuid = clipData.item?.uuid;
      for (let i = 0; i < 5; i++) {
        await new Promise(r => setTimeout(r, 2000));
        const statusResp = await fetch(`https://app.resemble.ai/api/v2/projects/${projectUuid}/clips/${clipUuid}`, { headers: authHeaders });
        const statusData = await statusResp.json();
        audioUrl = statusData.item?.link || statusData.item?.audio_src;
        if (audioUrl) break;
      }
    }

    if (!audioUrl) throw new Error("Resemble clip generation timed out or failed to provide an audio link");

    console.log(`🔊 Resemble: Fetching audio from ${audioUrl}...`);
    const audioResp = await fetch(audioUrl);
    if (!audioResp.ok) throw new Error(`Failed to download Resemble audio: ${audioResp.statusText}`);
    const audioBuffer = await audioResp.arrayBuffer();

    // Cleanup (Fire and Forget)
    fetch(`https://app.resemble.ai/api/v2/voices/${voiceUuid}`, {
      method: "DELETE",
      headers: authHeaders
    }).catch(() => {});

    res.set('Content-Type', 'audio/wav');
    res.send(Buffer.from(audioBuffer));
  } catch (err) {
    console.error(`🚨 Resemble Route Fatal:`, err);
    res.status(500).json({ error: err.message });
  }
});

// ─── ELEVENLABS ───

async function handleEleven(req, res, modelId) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const { text } = req.body;
  const audioFile = req.file;

  if (!apiKey || !audioFile || !text) return res.status(400).json({ error: "Missing data" });

  try {
    console.log(`🎤 ElevenLabs: Creating Voice...`);
    const form = new FormData();
    form.append("name", `temp-${Date.now()}`);
    form.append("files", audioFile.buffer, { filename: 'sample.wav', contentType: 'audio/wav' });

    const addResp = await fetch("https://api.elevenlabs.io/v1/voices/add", {
      method: "POST",
      headers: { 
        "xi-api-key": apiKey,
        ...form.getHeaders()
      },
      body: form
    });
    
    const addData = await addResp.json();
    if (!addResp.ok || !addData.voice_id) {
        console.error(`❌ ElevenLabs Voice Creation Failed:`, addData);
        throw new Error("Failed to add voice to ElevenLabs");
    }
    
    const voice_id = addData.voice_id;
    console.log(`✅ ElevenLabs Voice Created: ${voice_id}. Starting TTS...`);

    const ttsResp = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voice_id}`, {
      method: "POST",
      headers: { "xi-api-key": apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ 
        text, 
        model_id: modelId,
        voice_settings: {
            stability: 0.5,
            similarity_boost: 0.8,
        }
      })
    });

    if (!ttsResp.ok) {
        const errText = await ttsResp.text();
        console.error(`❌ ElevenLabs TTS Failed: ${errText}`);
        throw new Error(`ElevenLabs TTS Failed: ${errText}`);
    }
    
    const audioBuffer = await ttsResp.arrayBuffer();

    // Cleanup
    fetch(`https://api.elevenlabs.io/v1/voices/${voice_id}`, {
      method: "DELETE",
      headers: { "xi-api-key": apiKey }
    }).catch(() => {});

    res.set('Content-Type', 'audio/mpeg');
    res.send(Buffer.from(audioBuffer));
  } catch (err) {
    console.error(`🚨 ElevenLabs Route Fatal:`, err);
    res.status(500).json({ error: err.message });
  }
}

app.post('/api/clone/eleven-normal', upload.single('audio'), (req, res) => handleEleven(req, res, "eleven_multilingual_v2"));
app.post('/api/clone/eleven-flash', upload.single('audio'), (req, res) => handleEleven(req, res, "eleven_flash_v2_5"));

app.listen(port, () => {
  console.log(`🚀 Voice Clone API Server running on port ${port}`);
});
