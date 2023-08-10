import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PostUpdateManyWithoutAuthorNestedInputSchema } from './PostUpdateManyWithoutAuthorNestedInputSchema';

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  posts: z.lazy(() => PostUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export default UserUpdateInputSchema;
