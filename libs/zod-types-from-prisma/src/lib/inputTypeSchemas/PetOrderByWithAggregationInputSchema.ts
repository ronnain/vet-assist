import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PetCountOrderByAggregateInputSchema } from './PetCountOrderByAggregateInputSchema';
import { PetAvgOrderByAggregateInputSchema } from './PetAvgOrderByAggregateInputSchema';
import { PetMaxOrderByAggregateInputSchema } from './PetMaxOrderByAggregateInputSchema';
import { PetMinOrderByAggregateInputSchema } from './PetMinOrderByAggregateInputSchema';
import { PetSumOrderByAggregateInputSchema } from './PetSumOrderByAggregateInputSchema';

export const PetOrderByWithAggregationInputSchema: z.ZodType<Prisma.PetOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PetCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PetAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PetMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PetMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PetSumOrderByAggregateInputSchema).optional()
}).strict();

export default PetOrderByWithAggregationInputSchema;
