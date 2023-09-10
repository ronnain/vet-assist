import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageTypeEnumSchema } from './MessageTypeEnumSchema';
import { UserCreateNestedOneWithoutAuthorMessagesInputSchema } from './UserCreateNestedOneWithoutAuthorMessagesInputSchema';
import { ConversationCreateNestedOneWithoutMessagesInputSchema } from './ConversationCreateNestedOneWithoutMessagesInputSchema';

export const MessageCreateWithoutRecipientsFirstTimeReadInputSchema: z.ZodType<Prisma.MessageCreateWithoutRecipientsFirstTimeReadInput> = z.object({
  storedAt: z.coerce.date().optional(),
  content: z.string(),
  type: z.lazy(() => MessageTypeEnumSchema),
  author: z.lazy(() => UserCreateNestedOneWithoutAuthorMessagesInputSchema),
  conversation: z.lazy(() => ConversationCreateNestedOneWithoutMessagesInputSchema).optional()
}).strict();

export default MessageCreateWithoutRecipientsFirstTimeReadInputSchema;
