import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, 'public/images');

const TITLE_IMAGE = {
  // Shindou close-up while summoning Maestro. Strongest title-card fit.
  url: 'https://static.wikia.nocookie.net/inazuma-eleven/images/9/9c/%28GO%29_Shindou_summoning_Maestro.png/revision/latest?cb=20230913083035',
  ext: 'png',
};

// Shindou Takuto reaction video screenshots.
// Rule: use GO screenshots where Shindou is clearly visible, preferably 1280x720.
const IMAGES = [
  { id: 1,  note: 'captain burden / crying close-up',       url: 'https://static.wikia.nocookie.net/inazuma-eleven/images/9/90/%28GO_%28008%29%29_Shindou_crying.png/revision/latest?cb=20160829135348', ext: 'png' },
  { id: 2,  note: 'Kami no Takt close-up',                  url: 'https://static.wikia.nocookie.net/inazuma-eleven/images/6/6b/%28GO_%28008%29%29_Shindou_conducting.png/revision/latest?cb=20230906130207', ext: 'png' },
  { id: 3,  note: 'Shindou and Maestro',                    url: 'https://static.wikia.nocookie.net/inazuma-eleven/images/2/21/%28GO_%28003%29%29_Shindou_and_Maestro.png/revision/latest?cb=20230905153322', ext: 'png' },
  { id: 4,  note: 'Fortissimo clear action',                url: 'https://static.wikia.nocookie.net/inazuma-eleven/images/7/7c/%28GO%29_Fortissimo_4.png/revision/latest?cb=20160721115557', ext: 'png' },
  { id: 5,  note: 'Maestro charge / Keshin technique',      url: 'https://static.wikia.nocookie.net/inazuma-eleven/images/f/f2/%28GO%29_Shindou_and_Maestro_preparing_to_charge.png/revision/latest?cb=20230913083036', ext: 'png' },
  { id: 6,  note: 'Tenma and Shindou',                      url: 'https://static.wikia.nocookie.net/inazuma-eleven/images/e/e3/%28GO_%28034%29%29_Tenma_and_Shindou.png/revision/latest?cb=20160902184806', ext: 'png' },
  { id: 7,  note: 'Shindou motivating the team',            url: 'https://static.wikia.nocookie.net/inazuma-eleven/images/5/52/%28GO_%28015%29%29_Shindou_motivating_the_others.png/revision/latest?cb=20160901204328', ext: 'png' },
  { id: 8,  note: 'Fifth Sector conflict / heavy mood',     url: 'https://static.wikia.nocookie.net/inazuma-eleven/images/9/9c/%28GO_%28004%29%29_Shindou_saying_nobody_can_save_the_club.png/revision/latest?cb=20160715122205', ext: 'png' },
  { id: 9,  note: 'fragile captain close-up',               url: 'https://static.wikia.nocookie.net/inazuma-eleven/images/8/86/%28GO_%28010%29%29_Shindou_without_captain_band.png/revision/latest?cb=20160901202711', ext: 'png' },
  { id: 10, note: 'ball control / game changer',            url: 'https://static.wikia.nocookie.net/inazuma-eleven/images/c/c6/%28GO%29_Fortissimo_1.png/revision/latest?cb=20160721115607', ext: 'png' },
  { id: 11, note: 'Shindou and Kidou',                      url: 'https://static.wikia.nocookie.net/inazuma-eleven/images/6/62/%28GO%29_Shindou_and_Kidou.png/revision/latest?cb=20160715194000', ext: 'png' },
  { id: 12, note: 'victory / relief close-up',              url: 'https://static.wikia.nocookie.net/inazuma-eleven/images/6/6b/%28GO_%28044%29%29_Shindou_glad_about_Raimon%27s_victory.png/revision/latest?cb=20230912075618', ext: 'png' },
  { id: 13, note: 'team center / final summary',            url: 'https://static.wikia.nocookie.net/inazuma-eleven/images/f/f0/%28GO%29_Shindou_saying_that_they_will_go.png/revision/latest?cb=20160715123456', ext: 'png' },
];

async function download(url, filepath) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(filepath, buf);
  return buf.length;
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  process.stdout.write('[title] title.png...');
  try {
    const size = await download(TITLE_IMAGE.url, resolve(OUT_DIR, 'title.png'));
    console.log(` OK (${(size / 1024).toFixed(1)}KB)`);
  } catch (e) {
    console.log(` FAILED: ${e.message}`);
  }

  for (const img of IMAGES) {
    const filename = `anime_${String(img.id).padStart(2, '0')}.${img.ext}`;
    process.stdout.write(`[${img.id}/13] ${filename} (${img.note})...`);
    try {
      const size = await download(img.url, resolve(OUT_DIR, filename));
      console.log(` OK (${(size / 1024).toFixed(1)}KB)`);
    } catch (e) {
      console.log(` FAILED: ${e.message}`);
    }
  }
}

main().catch(err => { console.error(err); process.exit(1); });
