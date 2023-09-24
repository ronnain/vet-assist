import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProblemAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProblemAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  prospectId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProblemAvgOrderByAggregateInputSchema;
