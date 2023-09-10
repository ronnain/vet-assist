import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageTypeEnumSchema } from './MessageTypeEnumSchema';
import { ReadAtUncheckedCreateNestedManyWithoutMessageInputSchema } from './ReadAtUncheckedCreateNestedManyWithoutMessageInputSchema';

export const MessageUncheckedCreateWithoutAuthorInputSchema: z.ZodType<Prisma.MessageUncheckedCreateWithoutAuthorInput> = z.object({
  id: z.number().int().optional(),
  storedAt: z.coerce.date().optional(),
  content: z.string(),
  type: z.lazy(() => MessageTypeEnumSchema),
  conversationId: z.number().int().optional().nullable(),
  recipientsFirstTimeRead: z.lazy(() => ReadAtUncheckedCreateNestedManyWithoutMessageInputSchema).optional()
}).strict();

export default MessageUncheckedCreateWithoutAuthorInputSchema;
