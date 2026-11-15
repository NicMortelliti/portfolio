import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  // Load work entries from the `src/content/work/` directory.
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.string(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
      url: z.string().optional(),
      heroImage: z.optional(image()),
    }),
});

const about = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/about' }),
  schema: z.object({
    headline: z.string(),
    description: z.string(),
  }),
});

export const collections = { work, about };
