import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageTypeEnumSchema } from './MessageTypeEnumSchema';
import { ReadAtUncheckedCreateNestedManyWithoutMessageInputSchema } from './ReadAtUncheckedCreateNestedManyWithoutMessageInputSchema';

export const MessageUncheckedCreateWithoutConversationInputSchema: z.ZodType<Prisma.MessageUncheckedCreateWithoutConversationInput> = z.object({
  id: z.number().int().optional(),
  storedAt: z.coerce.date().optional(),
  content: z.string(),
  type: z.lazy(() => MessageTypeEnumSchema),
  authorId: z.number().int(),
  recipientsFirstTimeRead: z.lazy(() => ReadAtUncheckedCreateNestedManyWithoutMessageInputSchema).optional()
}).strict();

export default MessageUncheckedCreateWithoutConversationInputSchema;
