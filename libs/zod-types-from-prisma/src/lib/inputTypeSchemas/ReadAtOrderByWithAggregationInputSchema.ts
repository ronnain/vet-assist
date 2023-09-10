import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ReadAtCountOrderByAggregateInputSchema } from './ReadAtCountOrderByAggregateInputSchema';
import { ReadAtAvgOrderByAggregateInputSchema } from './ReadAtAvgOrderByAggregateInputSchema';
import { ReadAtMaxOrderByAggregateInputSchema } from './ReadAtMaxOrderByAggregateInputSchema';
import { ReadAtMinOrderByAggregateInputSchema } from './ReadAtMinOrderByAggregateInputSchema';
import { ReadAtSumOrderByAggregateInputSchema } from './ReadAtSumOrderByAggregateInputSchema';

export const ReadAtOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReadAtOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  readAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  messageId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ReadAtCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ReadAtAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReadAtMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReadAtMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ReadAtSumOrderByAggregateInputSchema).optional()
}).strict();

export default ReadAtOrderByWithAggregationInputSchema;
