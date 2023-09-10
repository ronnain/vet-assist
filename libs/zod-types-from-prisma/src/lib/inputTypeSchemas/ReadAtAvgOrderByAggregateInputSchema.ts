import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ReadAtAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ReadAtAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  messageId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default ReadAtAvgOrderByAggregateInputSchema;
