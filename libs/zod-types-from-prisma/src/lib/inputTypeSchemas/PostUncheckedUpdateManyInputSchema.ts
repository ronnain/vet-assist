import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';

export const PostUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PostUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  published: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  authorId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export default PostUncheckedUpdateManyInputSchema;
