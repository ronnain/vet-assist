import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PostUncheckedCreateInputSchema: z.ZodType<Prisma.PostUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string().optional().nullable(),
  published: z.boolean().optional().nullable(),
  authorId: z.number().int().optional().nullable()
}).strict();

export default PostUncheckedCreateInputSchema;
