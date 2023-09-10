import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedManyWithoutConversationsInputSchema } from './UserCreateNestedManyWithoutConversationsInputSchema';

export const ConversationCreateWithoutMessagesInputSchema: z.ZodType<Prisma.ConversationCreateWithoutMessagesInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  users: z.lazy(() => UserCreateNestedManyWithoutConversationsInputSchema).optional()
}).strict();

export default ConversationCreateWithoutMessagesInputSchema;
