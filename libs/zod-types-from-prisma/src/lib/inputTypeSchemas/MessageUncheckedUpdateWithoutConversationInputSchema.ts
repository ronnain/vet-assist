import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { MessageTypeEnumSchema } from './MessageTypeEnumSchema';
import { EnumMessageTypeEnumFieldUpdateOperationsInputSchema } from './EnumMessageTypeEnumFieldUpdateOperationsInputSchema';
import { ReadAtUncheckedUpdateManyWithoutMessageNestedInputSchema } from './ReadAtUncheckedUpdateManyWithoutMessageNestedInputSchema';

export const MessageUncheckedUpdateWithoutConversationInputSchema: z.ZodType<Prisma.MessageUncheckedUpdateWithoutConversationInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  storedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => MessageTypeEnumSchema),z.lazy(() => EnumMessageTypeEnumFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  recipientsFirstTimeRead: z.lazy(() => ReadAtUncheckedUpdateManyWithoutMessageNestedInputSchema).optional()
}).strict();

export default MessageUncheckedUpdateWithoutConversationInputSchema;
