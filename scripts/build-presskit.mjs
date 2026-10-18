// Zips the press assets into public/press/rewilding-rite-presskit.zip before the site build.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, statSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { zipSync } from 'fflate';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const art = join(root, 'public', 'art');
const include = [['keyart', 'logos-and-key-art'], ['portraits', 'screenshots']];
const files = {};
for (const [dir, name] of include) {
  const d = join(art, dir);
  for (const f of readdirSync(d)) {
    if (f === 'og.png' || !f.endsWith('.png') || !statSync(join(d, f)).isFile()) continue;
    files[`rewilding-rite-presskit/${name}/${f}`] = new Uint8Array(readFileSync(join(d, f)));
  }
}
files['rewilding-rite-presskit/README.txt'] = new TextEncoder().encode(
  'The Rewilding Rite press kit\nPNG assets at native resolution. Pixel art: scale by whole numbers only.\n'
);
mkdirSync(join(root, 'public', 'press'), { recursive: true });
writeFileSync(join(root, 'public', 'press', 'rewilding-rite-presskit.zip'), zipSync(files, { level: 6 }));
console.log(`press kit: ${Object.keys(files).length} files`);
