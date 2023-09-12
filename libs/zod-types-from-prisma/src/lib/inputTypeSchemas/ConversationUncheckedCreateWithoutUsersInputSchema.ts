import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConversationTypeSchema } from './ConversationTypeSchema';
import { MessageUncheckedCreateNestedManyWithoutConversationInputSchema } from './MessageUncheckedCreateNestedManyWithoutConversationInputSchema';

export const ConversationUncheckedCreateWithoutUsersInputSchema: z.ZodType<Prisma.ConversationUncheckedCreateWithoutUsersInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.lazy(() => ConversationTypeSchema),
  messages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutConversationInputSchema).optional()
}).strict();

export default ConversationUncheckedCreateWithoutUsersInputSchema;
