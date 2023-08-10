import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PostCreateManyAuthorInputSchema: z.ZodType<Prisma.PostCreateManyAuthorInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string().optional().nullable(),
  published: z.boolean().optional().nullable()
}).strict();

export default PostCreateManyAuthorInputSchema;
