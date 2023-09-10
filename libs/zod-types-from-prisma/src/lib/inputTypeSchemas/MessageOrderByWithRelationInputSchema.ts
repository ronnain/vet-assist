import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { ReadAtOrderByRelationAggregateInputSchema } from './ReadAtOrderByRelationAggregateInputSchema';
import { ConversationOrderByWithRelationInputSchema } from './ConversationOrderByWithRelationInputSchema';

export const MessageOrderByWithRelationInputSchema: z.ZodType<Prisma.MessageOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  storedAt: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  conversationId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  author: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  recipientsFirstTimeRead: z.lazy(() => ReadAtOrderByRelationAggregateInputSchema).optional(),
  conversation: z.lazy(() => ConversationOrderByWithRelationInputSchema).optional()
}).strict();

export default MessageOrderByWithRelationInputSchema;
