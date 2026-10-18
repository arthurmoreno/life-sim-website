import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site is plain static output. Host-specific values come from the environment so the same
// build works on GitHub Pages (project path) or a custom domain / Cloudflare Pages (root).
const site = process.env.SITE_URL ?? 'https://arthurmoreno.github.io';
const base = process.env.SITE_BASE ?? '/life-sim-website';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { inlineStylesheets: 'auto' },
  integrations: [sitemap({ filter: (page) => !page.includes('/styleguide') })],
});
