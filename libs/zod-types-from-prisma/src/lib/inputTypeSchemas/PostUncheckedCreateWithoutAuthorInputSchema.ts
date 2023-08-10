import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PostUncheckedCreateWithoutAuthorInputSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutAuthorInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  content: z.string().optional().nullable(),
  published: z.boolean().optional().nullable()
}).strict();

export default PostUncheckedCreateWithoutAuthorInputSchema;
