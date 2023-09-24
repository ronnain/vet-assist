import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProblemMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProblemMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  prospectId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProblemMaxOrderByAggregateInputSchema;
