import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateManyAuthorInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    content: z.string().optional().nullable(),
    published: z.boolean().optional().nullable(),
  })
  .strict();

export const PostCreateManyAuthorInputObjectSchema = Schema;