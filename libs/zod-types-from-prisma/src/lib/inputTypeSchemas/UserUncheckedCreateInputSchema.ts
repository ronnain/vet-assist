import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PostUncheckedCreateNestedManyWithoutAuthorInputSchema } from './PostUncheckedCreateNestedManyWithoutAuthorInputSchema';

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  posts: z.lazy(() => PostUncheckedCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export default UserUncheckedCreateInputSchema;
