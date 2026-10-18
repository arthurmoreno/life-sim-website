# The Rewilding Rite: website

Official site of *The Rewilding Rite*, built with [Astro](https://astro.build) as plain static files, so it deploys to GitHub Pages or Cloudflare Pages unchanged.

## Run it

```sh
npm install
npm run dev        # http://localhost:4321/life-sim-website/
npm run build      # zips the press kit, then builds into dist/
npm run preview    # serve dist/
```

Requires Node 22.12 or newer.

## Where things live

| What | Where |
|---|---|
| CTA stage, platforms, outbound links | `site.config.yaml` |
| Release ladder and Now/Next/Later | `src/data/roadmap.yaml` |
| Devlog posts | `src/content/devlog/*.md` |
| Design tokens (`--rr-*`) | `src/styles/tokens.css` |
| Components | `src/components/` (all shown on `/styleguide/`) |
| Art used by the site | `public/art/` (copied from the game's asset-foundry) |

## Add a devlog post

Create `src/content/devlog/<slug>.md`:

```md
---
title: My post
date: 2026-11-01
summary: One or two sentences for the card and RSS.
tags: [simulation]      # simulation | engine | art | design | release
cover: art/portraits/warden.png   # optional, 384x288 PNG
coverAlt: Describe the image
---
Markdown body. Set `draft: true` to hide it.
```

It appears in the index, the home page (3 newest), the tag filter and `/devlog/rss.xml`. No other file changes.

## Change the CTA stage

Edit `site.config.yaml`. The primary button resolves in this order:

1. `links.steam` set: **Wishlist on Steam**
2. else `links.itch` set: **Play the prototype on itch.io**
3. else `links.newsletter` set: **Follow the journey**
4. else: **Read the devlog**

Change `stage` (`prototype | demo | steam_coming_soon | early_access | released`) and `version` to update the status badge. `trailer_youtube_id` swaps the hero key art for a click-to-load YouTube player (youtube-nocookie, nothing loads before the click).

## Update the art

```sh
npm run sync-assets            # from ../life-simulation-game/asset-foundry/staging
npm run sync-assets -- /other/staging/path
```

The copies in `public/art/` are committed, so a normal build never needs the game repo. Pixel art is always shown at whole-number scales (`PixelImage`, `LoopClip`); never use JPEG.

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main` (set Pages source to "GitHub Actions" in the repo settings). The base path comes from `SITE_URL` / `SITE_BASE`; for a custom domain or Cloudflare Pages set `SITE_BASE=/`.

## Still to fill in (search for `TODO(arthur)`)

Studio name, contact email, itch.io URL, newsletter form action, socials, lore wording, developer blurb, final tagline.

`legacy-gatsby/` holds the previous Gatsby site until it is deleted.
