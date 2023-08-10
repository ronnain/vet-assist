import { z } from 'zod';
import { UserCreateNestedOneWithoutPostsInputObjectSchema } from './UserCreateNestedOneWithoutPostsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostCreateInput> = z
  .object({
    title: z.string(),
    content: z.string().optional().nullable(),
    published: z.boolean().optional().nullable(),
    author: z
      .lazy(() => UserCreateNestedOneWithoutPostsInputObjectSchema)
      .optional(),
  })
  .strict();

export const PostCreateInputObjectSchema = Schema;
