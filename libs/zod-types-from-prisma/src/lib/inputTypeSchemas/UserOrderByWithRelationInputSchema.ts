import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { MessageOrderByRelationAggregateInputSchema } from './MessageOrderByRelationAggregateInputSchema';
import { ReadAtOrderByRelationAggregateInputSchema } from './ReadAtOrderByRelationAggregateInputSchema';
import { ConversationOrderByRelationAggregateInputSchema } from './ConversationOrderByRelationAggregateInputSchema';
import { PetOrderByRelationAggregateInputSchema } from './PetOrderByRelationAggregateInputSchema';

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  authorMessages: z.lazy(() => MessageOrderByRelationAggregateInputSchema).optional(),
  firstTimeReadMessages: z.lazy(() => ReadAtOrderByRelationAggregateInputSchema).optional(),
  conversations: z.lazy(() => ConversationOrderByRelationAggregateInputSchema).optional(),
  pets: z.lazy(() => PetOrderByRelationAggregateInputSchema).optional()
}).strict();

export default UserOrderByWithRelationInputSchema;
