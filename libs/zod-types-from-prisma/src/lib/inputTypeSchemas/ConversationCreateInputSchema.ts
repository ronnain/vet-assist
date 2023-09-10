import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageCreateNestedManyWithoutConversationInputSchema } from './MessageCreateNestedManyWithoutConversationInputSchema';
import { UserCreateNestedManyWithoutConversationsInputSchema } from './UserCreateNestedManyWithoutConversationsInputSchema';

export const ConversationCreateInputSchema: z.ZodType<Prisma.ConversationCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  messages: z.lazy(() => MessageCreateNestedManyWithoutConversationInputSchema).optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutConversationsInputSchema).optional()
}).strict();

export default ConversationCreateInputSchema;
