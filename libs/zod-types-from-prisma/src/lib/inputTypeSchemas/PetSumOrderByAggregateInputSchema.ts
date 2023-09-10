import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PetSumOrderByAggregateInputSchema: z.ZodType<Prisma.PetSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PetSumOrderByAggregateInputSchema;