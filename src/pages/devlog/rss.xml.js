import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { config } from '../../lib/site';

export async function GET(context) {
  const posts = (await getCollection('devlog', (p) => !p.data.draft)).sort((a, b) => +b.data.date - +a.data.date);
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({
    title: `${config.name} devlog`,
    description: 'Honest development notes from The Rewilding Rite.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.summary,
      link: `${base}/devlog/${p.id}/`,
      categories: p.data.tags,
    })),
  });
}
