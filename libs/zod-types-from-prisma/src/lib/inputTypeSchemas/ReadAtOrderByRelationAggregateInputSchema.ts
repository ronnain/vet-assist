import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ReadAtOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ReadAtOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ReadAtOrderByRelationAggregateInputSchema;
