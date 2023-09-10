import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageTypeEnumSchema } from './MessageTypeEnumSchema';

export const MessageCreateManyAuthorInputSchema: z.ZodType<Prisma.MessageCreateManyAuthorInput> = z.object({
  id: z.number().int().optional(),
  storedAt: z.coerce.date().optional(),
  content: z.string(),
  type: z.lazy(() => MessageTypeEnumSchema),
  conversationId: z.number().int().optional().nullable()
}).strict();

export default MessageCreateManyAuthorInputSchema;
