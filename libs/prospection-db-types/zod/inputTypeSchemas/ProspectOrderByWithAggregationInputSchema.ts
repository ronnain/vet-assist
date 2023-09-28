import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProspectCountOrderByAggregateInputSchema } from './ProspectCountOrderByAggregateInputSchema';
import { ProspectAvgOrderByAggregateInputSchema } from './ProspectAvgOrderByAggregateInputSchema';
import { ProspectMaxOrderByAggregateInputSchema } from './ProspectMaxOrderByAggregateInputSchema';
import { ProspectMinOrderByAggregateInputSchema } from './ProspectMinOrderByAggregateInputSchema';
import { ProspectSumOrderByAggregateInputSchema } from './ProspectSumOrderByAggregateInputSchema';

export const ProspectOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProspectOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  offerName: z.lazy(() => SortOrderSchema).optional(),
  offerDescription: z.lazy(() => SortOrderSchema).optional(),
  rgpd: z.lazy(() => SortOrderSchema).optional(),
  unsubscribe: z.lazy(() => SortOrderSchema).optional(),
  unsubscribeLink: z.lazy(() => SortOrderSchema).optional(),
  problem: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ProspectCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProspectAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProspectMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProspectMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProspectSumOrderByAggregateInputSchema).optional()
}).strict();

export default ProspectOrderByWithAggregationInputSchema;
