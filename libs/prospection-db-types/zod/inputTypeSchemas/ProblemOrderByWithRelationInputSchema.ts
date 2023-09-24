import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProspectOrderByWithRelationInputSchema } from './ProspectOrderByWithRelationInputSchema';

export const ProblemOrderByWithRelationInputSchema: z.ZodType<Prisma.ProblemOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  prospectId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  prospect: z.lazy(() => ProspectOrderByWithRelationInputSchema).optional()
}).strict();

export default ProblemOrderByWithRelationInputSchema;
