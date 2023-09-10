import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { MessageTypeEnumSchema } from './MessageTypeEnumSchema';
import { EnumMessageTypeEnumFieldUpdateOperationsInputSchema } from './EnumMessageTypeEnumFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutAuthorMessagesNestedInputSchema } from './UserUpdateOneRequiredWithoutAuthorMessagesNestedInputSchema';
import { ReadAtUpdateManyWithoutMessageNestedInputSchema } from './ReadAtUpdateManyWithoutMessageNestedInputSchema';

export const MessageUpdateWithoutConversationInputSchema: z.ZodType<Prisma.MessageUpdateWithoutConversationInput> = z.object({
  storedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => MessageTypeEnumSchema),z.lazy(() => EnumMessageTypeEnumFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => UserUpdateOneRequiredWithoutAuthorMessagesNestedInputSchema).optional(),
  recipientsFirstTimeRead: z.lazy(() => ReadAtUpdateManyWithoutMessageNestedInputSchema).optional()
}).strict();

export default MessageUpdateWithoutConversationInputSchema;