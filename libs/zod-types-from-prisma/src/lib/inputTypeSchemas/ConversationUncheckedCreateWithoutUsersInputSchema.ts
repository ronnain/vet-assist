import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageUncheckedCreateNestedManyWithoutConversationInputSchema } from './MessageUncheckedCreateNestedManyWithoutConversationInputSchema';

export const ConversationUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.ConversationUncheckedCreateWithoutUsersInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  messages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutConversationInputSchema).optional()
}).strict();

export default ConversationUncheckedCreateWithoutUsersInputSchema;
