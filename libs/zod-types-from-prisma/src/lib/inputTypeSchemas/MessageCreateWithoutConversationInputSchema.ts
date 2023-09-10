import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageTypeEnumSchema } from './MessageTypeEnumSchema';
import { UserCreateNestedOneWithoutAuthorMessagesInputSchema } from './UserCreateNestedOneWithoutAuthorMessagesInputSchema';
import { ReadAtCreateNestedManyWithoutMessageInputSchema } from './ReadAtCreateNestedManyWithoutMessageInputSchema';

export const MessageCreateWithoutConversationInputSchema: z.ZodType<Prisma.MessageCreateWithoutConversationInput> = z.object({
  storedAt: z.coerce.date().optional(),
  content: z.string(),
  type: z.lazy(() => MessageTypeEnumSchema),
  author: z.lazy(() => UserCreateNestedOneWithoutAuthorMessagesInputSchema),
  recipientsFirstTimeRead: z.lazy(() => ReadAtCreateNestedManyWithoutMessageInputSchema).optional()
}).strict();

export default MessageCreateWithoutConversationInputSchema;
