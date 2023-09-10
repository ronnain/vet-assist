import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageCreateNestedManyWithoutConversationInputSchema } from './MessageCreateNestedManyWithoutConversationInputSchema';

export const ConversationCreateWithoutUsersInputSchema: z.ZodType<Prisma.ConversationCreateWithoutUsersInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  messages: z.lazy(() => MessageCreateNestedManyWithoutConversationInputSchema).optional()
}).strict();

export default ConversationCreateWithoutUsersInputSchema;
