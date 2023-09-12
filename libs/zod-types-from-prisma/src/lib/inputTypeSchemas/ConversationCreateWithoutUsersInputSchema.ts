import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConversationTypeSchema } from './ConversationTypeSchema';
import { MessageCreateNestedManyWithoutConversationInputSchema } from './MessageCreateNestedManyWithoutConversationInputSchema';

export const ConversationCreateWithoutUsersInputSchema: z.ZodType<Prisma.ConversationCreateWithoutUsersInput> = z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.lazy(() => ConversationTypeSchema),
  messages: z.lazy(() => MessageCreateNestedManyWithoutConversationInputSchema).optional()
}).strict();

export default ConversationCreateWithoutUsersInputSchema;
