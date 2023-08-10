import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';

export const PostOrderByWithRelationInputSchema: z.ZodType<Prisma.PostOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  published: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  authorId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  author: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export default PostOrderByWithRelationInputSchema;
