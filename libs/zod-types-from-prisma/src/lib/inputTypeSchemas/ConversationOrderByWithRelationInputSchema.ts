import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { MessageOrderByRelationAggregateInputSchema } from './MessageOrderByRelationAggregateInputSchema';
import { UserOrderByRelationAggregateInputSchema } from './UserOrderByRelationAggregateInputSchema';

export const ConversationOrderByWithRelationInputSchema: z.ZodType<Prisma.ConversationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  messages: z.lazy(() => MessageOrderByRelationAggregateInputSchema).optional(),
  users: z.lazy(() => UserOrderByRelationAggregateInputSchema).optional()
}).strict();

export default ConversationOrderByWithRelationInputSchema;
