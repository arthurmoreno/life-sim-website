import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const devlog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/devlog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.enum(['simulation', 'engine', 'art', 'design', 'release'])).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().default(''),
    draft: z.boolean().default(false),
  }),
});

export const collections = { devlog };
