import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema';
import { UserUpdateOneWithoutPostsNestedInputSchema } from './UserUpdateOneWithoutPostsNestedInputSchema';

export const PostUpdateInputSchema: z.ZodType<Prisma.PostUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  published: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  author: z.lazy(() => UserUpdateOneWithoutPostsNestedInputSchema).optional()
}).strict();

export default PostUpdateInputSchema;
