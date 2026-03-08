import { defineCollection, z } from 'astro:content';

const showcasesCollection = defineCollection({
  type: 'content',
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
  type: 'content',
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
  }),
});

const batchesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    batchNumber: z.number(),
    name: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    status: z.enum(['Active', 'Completed', 'Upcoming']),
    description: z.string(),
    totalProjects: z.number().optional(),
    students: z.array(z.object({
      name: z.string(),
      nim: z.string(),
      class: z.string(),
      group: z.string(),
      year: z.string(),
    })).optional(),
  }),
});

export const collections = {
  showcases: showcasesCollection,
  mentors: mentorsCollection,
  batches: batchesCollection,
};
