import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PostCreateNestedManyWithoutAuthorInputSchema } from './PostCreateNestedManyWithoutAuthorInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  email: z.string(),
  name: z.string().optional().nullable(),
  posts: z.lazy(() => PostCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export default UserCreateInputSchema;
