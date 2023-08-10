import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutPostsInputSchema } from './UserCreateNestedOneWithoutPostsInputSchema';

export const PostCreateInputSchema: z.ZodType<Prisma.PostCreateInput> = z.object({
  title: z.string(),
  content: z.string().optional().nullable(),
  published: z.boolean().optional().nullable(),
  author: z.lazy(() => UserCreateNestedOneWithoutPostsInputSchema).optional()
}).strict();

export default PostCreateInputSchema;
