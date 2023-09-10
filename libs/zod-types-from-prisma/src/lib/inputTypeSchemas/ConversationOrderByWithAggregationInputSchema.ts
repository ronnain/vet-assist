import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ConversationCountOrderByAggregateInputSchema } from './ConversationCountOrderByAggregateInputSchema';
import { ConversationAvgOrderByAggregateInputSchema } from './ConversationAvgOrderByAggregateInputSchema';
import { ConversationMaxOrderByAggregateInputSchema } from './ConversationMaxOrderByAggregateInputSchema';
import { ConversationMinOrderByAggregateInputSchema } from './ConversationMinOrderByAggregateInputSchema';
import { ConversationSumOrderByAggregateInputSchema } from './ConversationSumOrderByAggregateInputSchema';

export const ConversationOrderByWithAggregationInputSchema: z.ZodType<Prisma.ConversationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ConversationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ConversationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ConversationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ConversationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ConversationSumOrderByAggregateInputSchema).optional()
}).strict();

export default ConversationOrderByWithAggregationInputSchema;
