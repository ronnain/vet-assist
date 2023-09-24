import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProspectSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProspectSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProspectSumOrderByAggregateInputSchema;
