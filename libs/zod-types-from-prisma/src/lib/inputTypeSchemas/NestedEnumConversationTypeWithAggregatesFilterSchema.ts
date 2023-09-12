import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConversationTypeSchema } from './ConversationTypeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumConversationTypeFilterSchema } from './NestedEnumConversationTypeFilterSchema';

export const NestedEnumConversationTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumConversationTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ConversationTypeSchema).optional(),
  in: z.lazy(() => ConversationTypeSchema).array().optional(),
  notIn: z.lazy(() => ConversationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ConversationTypeSchema),z.lazy(() => NestedEnumConversationTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumConversationTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumConversationTypeFilterSchema).optional()
}).strict();

export default NestedEnumConversationTypeWithAggregatesFilterSchema;
