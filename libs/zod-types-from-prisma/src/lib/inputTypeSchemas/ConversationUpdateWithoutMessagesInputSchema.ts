import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ConversationTypeSchema } from './ConversationTypeSchema';
import { EnumConversationTypeFieldUpdateOperationsInputSchema } from './EnumConversationTypeFieldUpdateOperationsInputSchema';
import { UserUpdateManyWithoutConversationsNestedInputSchema } from './UserUpdateManyWithoutConversationsNestedInputSchema';

export const ConversationUpdateWithoutMessagesInputSchema: z.ZodType<Prisma.ConversationUpdateWithoutMessagesInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ConversationTypeSchema),z.lazy(() => EnumConversationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  users: z.lazy(() => UserUpdateManyWithoutConversationsNestedInputSchema).optional()
}).strict();

export default ConversationUpdateWithoutMessagesInputSchema;
