import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { MessageOrderByWithRelationInputSchema } from './MessageOrderByWithRelationInputSchema';

export const ReadAtOrderByWithRelationInputSchema: z.ZodType<Prisma.ReadAtOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  readAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  messageId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  message: z.lazy(() => MessageOrderByWithRelationInputSchema).optional()
}).strict();

export default ReadAtOrderByWithRelationInputSchema;
