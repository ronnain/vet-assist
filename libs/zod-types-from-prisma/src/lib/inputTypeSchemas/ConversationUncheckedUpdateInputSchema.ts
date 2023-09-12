import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ConversationTypeSchema } from './ConversationTypeSchema';
import { EnumConversationTypeFieldUpdateOperationsInputSchema } from './EnumConversationTypeFieldUpdateOperationsInputSchema';
import { MessageUncheckedUpdateManyWithoutConversationNestedInputSchema } from './MessageUncheckedUpdateManyWithoutConversationNestedInputSchema';
import { UserUncheckedUpdateManyWithoutConversationsNestedInputSchema } from './UserUncheckedUpdateManyWithoutConversationsNestedInputSchema';

export const ConversationUncheckedUpdateInputSchema: z.ZodType<Prisma.ConversationUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ConversationTypeSchema),z.lazy(() => EnumConversationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  messages: z.lazy(() => MessageUncheckedUpdateManyWithoutConversationNestedInputSchema).optional(),
  users: z.lazy(() => UserUncheckedUpdateManyWithoutConversationsNestedInputSchema).optional()
}).strict();

export default ConversationUncheckedUpdateInputSchema;
