import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageTypeEnumSchema } from './MessageTypeEnumSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumMessageTypeEnumFilterSchema } from './NestedEnumMessageTypeEnumFilterSchema';

export const NestedEnumMessageTypeEnumWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumMessageTypeEnumWithAggregatesFilter> = z.object({
  equals: z.lazy(() => MessageTypeEnumSchema).optional(),
  in: z.lazy(() => MessageTypeEnumSchema).array().optional(),
  notIn: z.lazy(() => MessageTypeEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => MessageTypeEnumSchema),z.lazy(() => NestedEnumMessageTypeEnumWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumMessageTypeEnumFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumMessageTypeEnumFilterSchema).optional()
}).strict();

export default NestedEnumMessageTypeEnumWithAggregatesFilterSchema;
