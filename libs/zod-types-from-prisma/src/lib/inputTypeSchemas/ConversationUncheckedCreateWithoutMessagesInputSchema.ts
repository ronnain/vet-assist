import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConversationTypeSchema } from './ConversationTypeSchema';
import { UserUncheckedCreateNestedManyWithoutConversationsInputSchema } from './UserUncheckedCreateNestedManyWithoutConversationsInputSchema';

export const ConversationUncheckedCreateWithoutMessagesInputSchema: z.ZodType<Prisma.ConversationUncheckedCreateWithoutMessagesInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.lazy(() => ConversationTypeSchema),
  users: z.lazy(() => UserUncheckedCreateNestedManyWithoutConversationsInputSchema).optional()
}).strict();

export default ConversationUncheckedCreateWithoutMessagesInputSchema;
