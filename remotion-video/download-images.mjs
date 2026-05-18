import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, 'public/images');
const WIKI_API = 'https://inazuma-eleven.fandom.com/api.php';

const TITLE_IMAGE = {
  // Gouenji close-up from the episode 52 comeback. Strong title-card fit for the ace striker.
  file: "(IE (052)) Gouenji's intensity.png",
  ext: 'png',
};

// Gouenji Shuuya reaction video screenshots.
// Rule: use official anime screenshots where Gouenji is clearly visible, preferably 1280x720.
const IMAGES = [
  { id: 1,  note: 'first Teikoku match entrance',        file: '(IE (002)) Gouenji entering the field.png', ext: 'png' },
  { id: 2,  note: 'Yuuka accident memory',               file: '(IE (001)) Shuuya remembering Yuuka.png', ext: 'png' },
  { id: 3,  note: 'telling Endou about Yuuka',           file: '(IE (003)) Shuuya telling Endou about Yuuka.png', ext: 'png' },
  { id: 4,  note: 'Inazuma Otoshi bicycle kick',         file: '(IE (005)) Gouenji bikick.png', ext: 'png' },
  { id: 5,  note: 'Kidou rivalry and Raimon core',       file: '(IE (013)) Kidou and Gouenji clash.png', ext: 'png' },
  { id: 6,  note: 'Kidokawa Seishuu confrontation',      file: "(IE (020)) Gouenji telling the triplets he'll fight fairly.png", ext: 'png' },
  { id: 7,  note: 'Zeus match and Yuuka promise',        file: '(IE (026)) Gouenji thinks of Yuuka.png', ext: 'png' },
  { id: 8,  note: 'return against Epsilon Kai',          file: '(IE (052)) Gouenji revealing himself.png', ext: 'png' },
  { id: 9,  note: 'Bakunetsu Storm comeback goal',       file: '(IE (052)) Gouenji scoring with Bakunetsu Storm.png', ext: 'png' },
  { id: 10, note: 'Crossfire with Fubuki',               file: '(IE (062)) Gouenji and Fubuki crossfire.png', ext: 'png' },
  { id: 11, note: 'Bakunetsu Screw in Inazuma Japan',    file: '(IE (072)) Bakunetsu Screw.png', ext: 'png' },
  { id: 12, note: 'Grand Fire with Toramaru and Hiroto', file: '(IE (095)) Grand Fire.png', ext: 'png' },
  { id: 13, note: 'Little Gigant final resolve',         file: '(IE (124)) Gouenji will score the goal.png', ext: 'png' },
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
