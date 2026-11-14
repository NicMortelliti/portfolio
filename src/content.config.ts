import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
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

export const collections = { work };
