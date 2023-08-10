import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PostSumOrderByAggregateInputSchema: z.ZodType<Prisma.PostSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PostSumOrderByAggregateInputSchema;
