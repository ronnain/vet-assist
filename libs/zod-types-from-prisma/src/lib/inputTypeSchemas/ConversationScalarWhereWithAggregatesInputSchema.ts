import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { EnumConversationTypeWithAggregatesFilterSchema } from './EnumConversationTypeWithAggregatesFilterSchema';
import { ConversationTypeSchema } from './ConversationTypeSchema';

export const ConversationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ConversationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ConversationScalarWhereWithAggregatesInputSchema),z.lazy(() => ConversationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConversationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConversationScalarWhereWithAggregatesInputSchema),z.lazy(() => ConversationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  type: z.union([ z.lazy(() => EnumConversationTypeWithAggregatesFilterSchema),z.lazy(() => ConversationTypeSchema) ]).optional(),
}).strict();

export default ConversationScalarWhereWithAggregatesInputSchema;
