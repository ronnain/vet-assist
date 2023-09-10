import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MessageCountOrderByAggregateInputSchema } from './MessageCountOrderByAggregateInputSchema';
import { MessageAvgOrderByAggregateInputSchema } from './MessageAvgOrderByAggregateInputSchema';
import { MessageMaxOrderByAggregateInputSchema } from './MessageMaxOrderByAggregateInputSchema';
import { MessageMinOrderByAggregateInputSchema } from './MessageMinOrderByAggregateInputSchema';
import { MessageSumOrderByAggregateInputSchema } from './MessageSumOrderByAggregateInputSchema';

export const MessageOrderByWithAggregationInputSchema: z.ZodType<Prisma.MessageOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  storedAt: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  conversationId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => MessageCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => MessageAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MessageMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MessageMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => MessageSumOrderByAggregateInputSchema).optional()
}).strict();

export default MessageOrderByWithAggregationInputSchema;
