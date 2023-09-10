import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageTypeEnumSchema } from './MessageTypeEnumSchema';
import { UserCreateNestedOneWithoutAuthorMessagesInputSchema } from './UserCreateNestedOneWithoutAuthorMessagesInputSchema';
import { ReadAtCreateNestedManyWithoutMessageInputSchema } from './ReadAtCreateNestedManyWithoutMessageInputSchema';
import { ConversationCreateNestedOneWithoutMessagesInputSchema } from './ConversationCreateNestedOneWithoutMessagesInputSchema';

export const MessageCreateInputSchema: z.ZodType<Prisma.MessageCreateInput> = z.object({
  storedAt: z.coerce.date().optional(),
  content: z.string(),
  type: z.lazy(() => MessageTypeEnumSchema),
  author: z.lazy(() => UserCreateNestedOneWithoutAuthorMessagesInputSchema),
  recipientsFirstTimeRead: z.lazy(() => ReadAtCreateNestedManyWithoutMessageInputSchema).optional(),
  conversation: z.lazy(() => ConversationCreateNestedOneWithoutMessagesInputSchema).optional()
}).strict();

export default MessageCreateInputSchema;
