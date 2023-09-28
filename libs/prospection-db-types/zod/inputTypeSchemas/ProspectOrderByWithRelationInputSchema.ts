import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';

export const ProspectOrderByWithRelationInputSchema: z.ZodType<Prisma.ProspectOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  offerName: z.lazy(() => SortOrderSchema).optional(),
  offerDescription: z.lazy(() => SortOrderSchema).optional(),
  rgpd: z.lazy(() => SortOrderSchema).optional(),
  unsubscribe: z.lazy(() => SortOrderSchema).optional(),
  unsubscribeLink: z.lazy(() => SortOrderSchema).optional(),
  problem: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export default ProspectOrderByWithRelationInputSchema;
