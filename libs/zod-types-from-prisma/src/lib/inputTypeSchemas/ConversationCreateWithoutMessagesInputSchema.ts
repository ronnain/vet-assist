import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConversationTypeSchema } from './ConversationTypeSchema';
import { UserCreateNestedManyWithoutConversationsInputSchema } from './UserCreateNestedManyWithoutConversationsInputSchema';

export const ConversationCreateWithoutMessagesInputSchema: z.ZodType<Prisma.ConversationCreateWithoutMessagesInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.lazy(() => ConversationTypeSchema),
  users: z.lazy(() => UserCreateNestedManyWithoutConversationsInputSchema).optional()
}).strict();

export default ConversationCreateWithoutMessagesInputSchema;
