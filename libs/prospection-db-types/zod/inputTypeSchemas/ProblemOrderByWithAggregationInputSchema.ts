import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProblemCountOrderByAggregateInputSchema } from './ProblemCountOrderByAggregateInputSchema';
import { ProblemAvgOrderByAggregateInputSchema } from './ProblemAvgOrderByAggregateInputSchema';
import { ProblemMaxOrderByAggregateInputSchema } from './ProblemMaxOrderByAggregateInputSchema';
import { ProblemMinOrderByAggregateInputSchema } from './ProblemMinOrderByAggregateInputSchema';
import { ProblemSumOrderByAggregateInputSchema } from './ProblemSumOrderByAggregateInputSchema';

export const ProblemOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProblemOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  prospectId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ProblemCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProblemAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProblemMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProblemMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProblemSumOrderByAggregateInputSchema).optional()
}).strict();

export default ProblemOrderByWithAggregationInputSchema;
