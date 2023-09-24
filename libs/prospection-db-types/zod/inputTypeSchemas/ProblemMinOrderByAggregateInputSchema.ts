import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProblemMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProblemMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  prospectId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProblemMinOrderByAggregateInputSchema;
