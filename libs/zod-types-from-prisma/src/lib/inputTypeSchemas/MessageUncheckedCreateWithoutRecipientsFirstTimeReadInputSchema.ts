import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageTypeEnumSchema } from './MessageTypeEnumSchema';

export const MessageUncheckedCreateWithoutRecipientsFirstTimeReadInputSchema: z.ZodType<Prisma.MessageUncheckedCreateWithoutRecipientsFirstTimeReadInput> = z.object({
  id: z.number().int().optional(),
  storedAt: z.coerce.date().optional(),
  content: z.string(),
  type: z.lazy(() => MessageTypeEnumSchema),
  authorId: z.number().int(),
  conversationId: z.number().int().optional().nullable()
}).strict();

export default MessageUncheckedCreateWithoutRecipientsFirstTimeReadInputSchema;
