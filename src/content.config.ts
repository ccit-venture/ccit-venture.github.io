import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const showcasesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/showcases' }),
  schema: z.object({
    productName: z.string(),
    tagline: z.string(),
    jurusan: z.enum(['FSD', 'ISA', 'DCM']),
    status: z.enum(['In-Incubation', 'Launched', 'Archived']),
    description: z.string().optional(),
    image: z.string().optional(),
    team: z.array(z.string()).optional(),
    githubUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    batch: z.string(),
  }),
});

const mentorsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/mentors' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    title: z.string(),
    bio: z.string(),
    image: z.string().optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    email: z.string().optional(),
    order: z.number().default(0),
    type: z.enum(['regular', 'guest']).default('regular'),
  }),
});

const batchesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/batches' }),
  schema: z.object({
    batchNumber: z.number(),
    name: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    status: z.enum(['Active', 'Completed', 'Upcoming']),
    description: z.string(),
    totalProjects: z.number().optional(),
    projects: z.array(z.object({
      name: z.string(),
      tagline: z.string(),
      description: z.string(),
      status: z.string(),
    })).optional(),
    students: z.array(z.object({
      name: z.string(),
      nim: z.string(),
      class: z.string(),
      group: z.string(),
      year: z.string(),
    })).optional(),
  }),
});

const modulesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/modules' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Product Development']),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']).default('Beginner'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    type: z.enum(['curriculum', 'lesson']).default('lesson'),
    order: z.number().optional(),
    estimatedTime: z.string().optional(),
    prerequisites: z.array(z.string()).default([]),
  }),
});

export const collections = {
  showcases: showcasesCollection,
  mentors: mentorsCollection,
  batches: batchesCollection,
  modules: modulesCollection,
};
