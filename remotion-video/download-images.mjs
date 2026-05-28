import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, 'public/images');
const WIKI_API = 'https://inazuma-eleven.fandom.com/api.php';

const TITLE_IMAGE = {
  // The victory moment communicates "world's best" immediately.
  file: '(IE (125)) Inazuma Japan winning the finals.png',
  ext: 'png',
};

// Little Gigant final and the Jet Stream winning goal.
// Rule: use official anime screenshots where Endou, Rococo, the final goal, or the victory are clear.
const IMAGES = [
  { id: 1,  note: 'Endou and Rococo face off',     file: '(IE (124)) Endou and Rococo facing off.png', ext: 'png' },
  { id: 2,  note: 'God Catch',                     file: '(IE (123)) God Catch.png', ext: 'png' },
  { id: 3,  note: 'Tenkuu Otoshi scores',          file: '(IE (123)) Tenkuu Otoshi scoring.png', ext: 'png' },
  { id: 4,  note: 'X Blast blocked',               file: '(IE (125)) Gouenji and Toramaru blocking X Blast.png', ext: 'png' },
  { id: 5,  note: 'Rococo as forward',             file: '(IE (124)) Rococo as forward.png', ext: 'png' },
  { id: 6,  note: 'Rococo stops Big Bang',         file: '(IE (124)) Rococo stopping Big Bang.png', ext: 'png' },
  { id: 7,  note: 'Kudou last order',              file: '(IE (125)) Kudou giving the last order.png', ext: 'png' },
  { id: 8,  note: 'Endou enjoys sakka',            file: "(IE (125)) Endou happy he's playing soccer.png", ext: 'png' },
  { id: 9,  note: 'Rococo faces Jet Stream',       file: '(IE (125)) Rococo determined to stop Jet Stream.png', ext: 'png' },
  { id: 10, note: 'Winning goal',                  file: '(IE (125)) Winning goal.png', ext: 'png' },
  { id: 11, note: 'World champion celebration',    file: '(IE (125)) Inazuma Japan winning the finals.png', ext: 'png' },
  { id: 12, note: 'Endou and Rococo handshake',    file: '(IE (125)) Endou and Rococo shaking hands.png', ext: 'png' },
  { id: 13, note: 'Memorable photos',              file: '(IE (125)) Memorable photos.png', ext: 'png' },
];

async function resolveFandomFile(file) {
  const params = new URLSearchParams({
    action: 'query',
    prop: 'imageinfo',
    iiprop: 'url|size',
    format: 'json',
    titles: `File:${file}`,
  });
  const res = await fetch(`${WIKI_API}?${params}`, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
  });
  if (!res.ok) throw new Error(`Fandom API HTTP ${res.status}`);
  const data = await res.json();
  const page = Object.values(data.query.pages)[0];
  const info = page?.imageinfo?.[0];
  if (!info?.url) throw new Error(`Fandom file not found: ${file}`);
  return info;
}

async function download(image, filepath) {
  const info = image.file ? await resolveFandomFile(image.file) : { url: image.url };
  const url = info.url;
  const originalUrl = url.includes('format=original')
    ? url
    : `${url}${url.includes('?') ? '&' : '?'}format=original`;
  const res = await fetch(originalUrl, {
    headers: {
      'Accept': 'image/png,image/jpeg,image/*',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(filepath, buf);
  return { size: buf.length, width: info.width, height: info.height };
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  process.stdout.write('[title] title.png...');
  try {
    const result = await download(TITLE_IMAGE, resolve(OUT_DIR, 'title.png'));
    console.log(` OK (${result.width}x${result.height}, ${(result.size / 1024).toFixed(1)}KB)`);
  } catch (e) {
    console.log(` FAILED: ${e.message}`);
  }

  for (const img of IMAGES) {
    const filename = `anime_${String(img.id).padStart(2, '0')}.${img.ext}`;
    process.stdout.write(`[${img.id}/13] ${filename} (${img.note})...`);
    try {
      const result = await download(img, resolve(OUT_DIR, filename));
      console.log(` OK (${result.width}x${result.height}, ${(result.size / 1024).toFixed(1)}KB)`);
    } catch (e) {
      console.log(` FAILED: ${e.message}`);
    }
  }
}

main().catch(err => { console.error(err); process.exit(1); });
