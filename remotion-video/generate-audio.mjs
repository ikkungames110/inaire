import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { VOCAB, COMMENTS } from './scripts/little-gigant-final-reactions.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const VOICEVOX = 'http://localhost:50021';
const PUBLIC_AUDIO = resolve(__dirname, 'public/audio');
const META_OUT = resolve(__dirname, 'src/audio-meta.json');
const FPS = 30;
const PAUSE_FRAMES = 25;
const INTRO_SPEED_SCALE = 1.1;
const MAIN_SPEED_SCALE = 1.2;

async function registerVocab() {
  for (const w of VOCAB) {
    const params = new URLSearchParams({
      surface: w.surface,
      pronunciation: w.pronunciation,
      accent_type: String(w.accent_type),
      word_type: 'PROPER_NOUN',
      priority: '10',
    });
    try {
      await fetch(`${VOICEVOX}/user_dict_word?${params}`, { method: 'POST' });
    } catch (_) {}
  }
  console.log('ユーザー辞書登録完了');
}

function getWavDuration(buf) {
  const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  const byteRate = view.getUint32(28, true);
  const dataSize = view.getUint32(40, true);
  return dataSize / byteRate;
}

async function synthesize(text, speakerId, speedScale = MAIN_SPEED_SCALE) {
  const qRes = await fetch(
    `${VOICEVOX}/audio_query?text=${encodeURIComponent(text)}&speaker=${speakerId}`,
    { method: 'POST' }
  );
  if (!qRes.ok) throw new Error(`audio_query failed: ${qRes.status}`);
  const query = await qRes.json();
  query.speedScale = speedScale;

  const sRes = await fetch(`${VOICEVOX}/synthesis?speaker=${speakerId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(query),
  });
  if (!sRes.ok) throw new Error(`synthesis failed: ${sRes.status}`);
  return Buffer.from(await sRes.arrayBuffer());
}

async function main() {
  await registerVocab();
  mkdirSync(PUBLIC_AUDIO, { recursive: true });
  const meta = [];

  for (const c of COMMENTS) {
    process.stdout.write(`[${c.id}] ${c.speakerName}: 生成中...`);
    const buf = await synthesize(c.text, c.speakerId, c.isIntro ? INTRO_SPEED_SCALE : MAIN_SPEED_SCALE);
    const filename = `comment_${String(c.id).padStart(2, '0')}.wav`;
    writeFileSync(resolve(PUBLIC_AUDIO, filename), buf);
    const duration = getWavDuration(buf);
    const durationInFrames = Math.ceil(duration * FPS) + PAUSE_FRAMES;
    meta.push({
      id: c.id,
      speakerName: c.speakerName,
      color: c.color,
      text: c.text,
      filename,
      duration,
      durationInFrames,
      seFile: c.seFile,
      image: c.image,
      ...(c.isIntro && { isIntro: true }),
    });
    console.log(` ${duration.toFixed(2)}s (${durationInFrames}f)`);
  }

  writeFileSync(META_OUT, JSON.stringify(meta, null, 2));

  const totalFrames = meta.reduce((s, c) => s + c.durationInFrames, 0);
  console.log(`\n完了！合計 ${totalFrames}フレーム (${(totalFrames / FPS).toFixed(1)}秒)`);
}

main().catch(err => { console.error(err); process.exit(1); });
