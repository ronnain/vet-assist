import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConversationTypeSchema } from './ConversationTypeSchema';
import { MessageCreateNestedManyWithoutConversationInputSchema } from './MessageCreateNestedManyWithoutConversationInputSchema';
import { UserCreateNestedManyWithoutConversationsInputSchema } from './UserCreateNestedManyWithoutConversationsInputSchema';

export const ConversationCreateInputSchema: z.ZodType<Prisma.ConversationCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.lazy(() => ConversationTypeSchema),
  messages: z.lazy(() => MessageCreateNestedManyWithoutConversationInputSchema).optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutConversationsInputSchema).optional()
}).strict();

export default ConversationCreateInputSchema;
