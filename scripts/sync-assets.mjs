// Copies the art the site uses from the game repo's asset-foundry staging area into public/art.
// The copies are committed, so a normal build never needs the sibling repo.
// Usage: npm run sync-assets [-- /path/to/asset-foundry/staging]
import { copyFileSync, mkdirSync, existsSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const src = resolve(process.argv[2] ?? join(root, '..', 'life-simulation-game', 'asset-foundry', 'staging'));
if (!existsSync(src)) {
  console.error(`staging folder not found: ${src}`);
  process.exit(1);
}

const L = 'lifesim';
const files = {
  // key art + brand
  // the voxel banner is the canonical key art; the emblem only exists in the older itch-banner folder
  'keyart/keyart.png': `${L}/itch-banner-voxel/keyart.png`,
  'keyart/banner.png': `${L}/itch-banner-voxel/banner.png`,
  'keyart/logo.png': `${L}/itch-banner-voxel/logo.png`,
  'keyart/emblem.png': `${L}/itch-banner/emblem.png`,
  // character portraits on the meadow scene
  'portraits/warden.png': `${L}/warden/portrait/scene.png`,
  'portraits/moccus.png': `${L}/moccus/portrait/scene.png`,
  'portraits/boar.png': `${L}/boar/portrait/scene.png`,
  'portraits/mirebound.png': `${L}/mirebound/portrait/scene.png`,
  'portraits/salvager.png': `${L}/salvager/portrait/scene.png`,
  'portraits/cataloguer.png': `${L}/cataloguer/portrait/scene.png`,
  // landscapes
  'scenes/meadow-golden-hour.png': 'backgrounds/meadow-golden-hour/raw.png',
  'scenes/bog-edge.png': 'backgrounds/bog-edge/raw-0.png',
  'scenes/cave-descent.png': 'backgrounds/cave-descent/raw-0.png',
  'scenes/salvage-yard-edge.png': 'backgrounds/salvage-yard-edge/raw-0.png',
  // sprite sheets (frame size and counts live in src/data/sprites.yaml)
  'sprites/boar-walk.png': `${L}/boar/walk/sheet.png`,
  'sprites/survivor-walk.png': `${L}/survivor/walk/sheet.png`,
  'sprites/oak-growth.png': `${L}/oak-stages/growth-sheet.png`,
};

const out = join(root, 'public', 'art');
const manifest = {};
for (const [dest, from] of Object.entries(files)) {
  const s = join(src, from);
  if (!existsSync(s)) {
    console.warn(`missing: ${from}`);
    continue;
  }
  const d = join(out, dest);
  mkdirSync(dirname(d), { recursive: true });
  copyFileSync(s, d);
  manifest[dest] = from;
}
writeFileSync(join(out, 'SOURCES.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`copied ${Object.keys(manifest).length} files to public/art`);
