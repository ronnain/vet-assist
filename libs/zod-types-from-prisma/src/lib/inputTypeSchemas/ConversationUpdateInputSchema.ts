import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MessageUpdateManyWithoutConversationNestedInputSchema } from './MessageUpdateManyWithoutConversationNestedInputSchema';
import { UserUpdateManyWithoutConversationsNestedInputSchema } from './UserUpdateManyWithoutConversationsNestedInputSchema';

export const ConversationUpdateInputSchema: z.ZodType<Prisma.ConversationUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  messages: z.lazy(() => MessageUpdateManyWithoutConversationNestedInputSchema).optional(),
  users: z.lazy(() => UserUpdateManyWithoutConversationsNestedInputSchema).optional()
}).strict();

export default ConversationUpdateInputSchema;
