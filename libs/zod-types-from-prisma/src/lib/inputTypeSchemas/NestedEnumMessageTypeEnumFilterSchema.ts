import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageTypeEnumSchema } from './MessageTypeEnumSchema';

export const NestedEnumMessageTypeEnumFilterSchema: z.ZodType<Prisma.NestedEnumMessageTypeEnumFilter> = z.object({
  equals: z.lazy(() => MessageTypeEnumSchema).optional(),
  in: z.lazy(() => MessageTypeEnumSchema).array().optional(),
  notIn: z.lazy(() => MessageTypeEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => MessageTypeEnumSchema),z.lazy(() => NestedEnumMessageTypeEnumFilterSchema) ]).optional(),
}).strict();

export default NestedEnumMessageTypeEnumFilterSchema;
