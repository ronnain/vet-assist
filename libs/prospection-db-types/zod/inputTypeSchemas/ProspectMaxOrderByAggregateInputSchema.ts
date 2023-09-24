import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProspectMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProspectMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  offerName: z.lazy(() => SortOrderSchema).optional(),
  offerDescription: z.lazy(() => SortOrderSchema).optional(),
  rgpd: z.lazy(() => SortOrderSchema).optional(),
  unsubscribe: z.lazy(() => SortOrderSchema).optional(),
  unsubscribeLink: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ProspectMaxOrderByAggregateInputSchema;
