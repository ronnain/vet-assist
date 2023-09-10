import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageTypeEnumSchema } from './MessageTypeEnumSchema';
import { ReadAtCreateNestedManyWithoutMessageInputSchema } from './ReadAtCreateNestedManyWithoutMessageInputSchema';
import { ConversationCreateNestedOneWithoutMessagesInputSchema } from './ConversationCreateNestedOneWithoutMessagesInputSchema';

export const MessageCreateWithoutAuthorInputSchema: z.ZodType<Prisma.MessageCreateWithoutAuthorInput> = z.object({
  storedAt: z.coerce.date().optional(),
  content: z.string(),
  type: z.lazy(() => MessageTypeEnumSchema),
  recipientsFirstTimeRead: z.lazy(() => ReadAtCreateNestedManyWithoutMessageInputSchema).optional(),
  conversation: z.lazy(() => ConversationCreateNestedOneWithoutMessagesInputSchema).optional()
}).strict();

export default MessageCreateWithoutAuthorInputSchema;
