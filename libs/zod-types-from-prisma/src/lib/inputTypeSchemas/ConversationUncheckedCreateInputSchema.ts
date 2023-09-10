import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageUncheckedCreateNestedManyWithoutConversationInputSchema } from './MessageUncheckedCreateNestedManyWithoutConversationInputSchema';
import { UserUncheckedCreateNestedManyWithoutConversationsInputSchema } from './UserUncheckedCreateNestedManyWithoutConversationsInputSchema';

export const ConversationUncheckedCreateInputSchema: z.ZodType<Prisma.ConversationUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  messages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutConversationInputSchema).optional(),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutConversationsInputSchema).optional()
}).strict();

export default ConversationUncheckedCreateInputSchema;
