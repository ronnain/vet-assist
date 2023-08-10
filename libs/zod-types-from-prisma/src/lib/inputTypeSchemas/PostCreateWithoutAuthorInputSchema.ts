import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PostCreateWithoutAuthorInputSchema: z.ZodType<Prisma.PostCreateWithoutAuthorInput> = z.object({
  title: z.string(),
  content: z.string().optional().nullable(),
  published: z.boolean().optional().nullable()
}).strict();

export default PostCreateWithoutAuthorInputSchema;
