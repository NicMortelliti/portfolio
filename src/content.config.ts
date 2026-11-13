import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    url: z.string().optional(),
  }),
});

export const collections = { work };
