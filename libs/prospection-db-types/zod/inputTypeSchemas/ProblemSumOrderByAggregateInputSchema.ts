import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProblemSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProblemSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  prospectId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProblemSumOrderByAggregateInputSchema;
