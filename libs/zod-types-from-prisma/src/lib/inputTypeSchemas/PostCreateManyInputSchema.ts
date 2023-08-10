import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PostCreateManyInputSchema: z.ZodType<Prisma.PostCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string().optional().nullable(),
  published: z.boolean().optional().nullable(),
  authorId: z.number().int().optional().nullable()
}).strict();

export default PostCreateManyInputSchema;
