import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Une fiche Markdown par projet dans src/content/projets/.
const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.enum(['entrepreneuriat', 'stage', 'academique', 'recherche']),
      // Texte affiché (« Avr. – Oct. 2026 ») ; `year` sert au tri.
      period: z.string(),
      year: z.number(),
      role: z.string(),
      context: z.string(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      order: z.number().default(99),
      // Capture réelle du projet ; à défaut, `illustration` (unDraw) est utilisée.
      cover: image().optional(),
      coverAlt: z.string().optional(),
      showCover: z.boolean().default(true),
      illustration: image().optional(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projets };
