import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageTypeEnumSchema } from './MessageTypeEnumSchema';

export const MessageCreateManyConversationInputSchema: z.ZodType<Prisma.MessageCreateManyConversationInput> = z.object({
  id: z.number().int().optional(),
  storedAt: z.coerce.date().optional(),
  content: z.string(),
  type: z.lazy(() => MessageTypeEnumSchema),
  authorId: z.number().int()
}).strict();

export default MessageCreateManyConversationInputSchema;
