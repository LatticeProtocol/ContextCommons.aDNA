import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const imageSchema = z.object({
  src: z.string(),
  alt: z.string().min(1),
  width: z.number().optional(),
  height: z.number().optional(),
});

const socialLinksSchema = z
  .object({
    github: z.string().url().optional(),
    twitter: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    website: z.string().url().optional(),
  })
  .optional();

const partners = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/partners' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    logo: imageSchema.optional(),
    url: z.string().url(),
    tier: z.enum(['founding', 'strategic', 'community', 'technology']),
    partner_type: z.enum([
      'academic',
      'community',
      'faith_based',
      'government',
      'technology',
      'nonprofit',
    ]),
    description: z.string().max(200).optional(),
    featured: z.boolean().default(false),
    order: z.number().int().default(0),
  }),
});

const tracks = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/tracks' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    tagline: z.string().max(120),
    description: z.string().max(500),
    icon: z.string().optional(),
    audience: z.string(),
    prerequisites: z.array(z.string()).optional(),
    modules: z.array(z.string()).optional(),
    competencies: z.array(z.string()).optional(),
    duration_weeks: z.number().optional(),
    order: z.number().int().default(0),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.enum(['mentor', 'steward', 'builder', 'council', 'staff']),
    title: z.string(),
    community: z.string().optional(),
    bio: z.string().max(400),
    photo: imageSchema.optional(),
    social: socialLinksSchema,
    featured: z.boolean().default(false),
    order: z.number().int().default(0),
    active: z.boolean().default(true),
  }),
});

const pilots = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/pilots' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    location: z.string(),
    community: z.string(),
    status: z.enum(['planning', 'active', 'completed']),
    launch_target: z.string(),
    description: z.string().max(500),
    cover_image: imageSchema.optional(),
    highlights: z.array(z.string()).optional(),
    order: z.number().int().default(0),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string().min(50).max(160),
    date: z.coerce.date(),
    category: z.enum([
      'announcement',
      'community',
      'curriculum',
      'partnership',
      'pilot',
    ]),
    featured: z.boolean().default(false),
    author: z.string().optional(),
    cover_image: imageSchema.optional(),
    excerpt: z.string().max(200).optional(),
  }),
});

export const collections = { partners, tracks, team, pilots, news };
