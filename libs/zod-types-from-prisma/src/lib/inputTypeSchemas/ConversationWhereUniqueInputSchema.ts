import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConversationWhereInputSchema } from './ConversationWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MessageListRelationFilterSchema } from './MessageListRelationFilterSchema';
import { UserListRelationFilterSchema } from './UserListRelationFilterSchema';

export const ConversationWhereUniqueInputSchema: z.ZodType<Prisma.ConversationWhereUniqueInput> = z.object({
  id: z.number()
})
.and(z.object({
  id: z.number().optional(),
  AND: z.union([ z.lazy(() => ConversationWhereInputSchema),z.lazy(() => ConversationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConversationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConversationWhereInputSchema),z.lazy(() => ConversationWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  messages: z.lazy(() => MessageListRelationFilterSchema).optional(),
  users: z.lazy(() => UserListRelationFilterSchema).optional()
}).strict());

export default ConversationWhereUniqueInputSchema;
