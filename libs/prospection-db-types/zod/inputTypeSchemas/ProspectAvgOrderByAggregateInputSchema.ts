import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProspectAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProspectAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProspectAvgOrderByAggregateInputSchema;
