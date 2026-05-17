import { execSync } from 'child_process';
import { mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const now = new Date();
const pad = (n) => String(n).padStart(2, '0');
const datetime = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;

const outDir = resolve(__dirname, 'out');
mkdirSync(outDir, { recursive: true });

const outFile = resolve(outDir, `${datetime}.mp4`);
console.log(`出力先: ${outFile}`);

execSync(
  `npx remotion render src/index.ts MyVideo "${outFile}" --overwrite`,
  { stdio: 'inherit', cwd: __dirname }
);
