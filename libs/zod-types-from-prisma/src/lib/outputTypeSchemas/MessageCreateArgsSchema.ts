import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MessageIncludeSchema } from '../inputTypeSchemas/MessageIncludeSchema'
import { MessageCreateInputSchema } from '../inputTypeSchemas/MessageCreateInputSchema'
import { MessageUncheckedCreateInputSchema } from '../inputTypeSchemas/MessageUncheckedCreateInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { ReadAtFindManyArgsSchema } from "../outputTypeSchemas/ReadAtFindManyArgsSchema"
import { ConversationArgsSchema } from "../outputTypeSchemas/ConversationArgsSchema"
import { MessageCountOutputTypeArgsSchema } from "../outputTypeSchemas/MessageCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MessageSelectSchema: z.ZodType<Prisma.MessageSelect> = z.object({
  id: z.boolean().optional(),
  storedAt: z.boolean().optional(),
  content: z.boolean().optional(),
  type: z.boolean().optional(),
  authorId: z.boolean().optional(),
  conversationId: z.boolean().optional(),
  author: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  recipientsFirstTimeRead: z.union([z.boolean(),z.lazy(() => ReadAtFindManyArgsSchema)]).optional(),
  conversation: z.union([z.boolean(),z.lazy(() => ConversationArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MessageCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const MessageCreateArgsSchema: z.ZodType<Prisma.MessageCreateArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  data: z.union([ MessageCreateInputSchema,MessageUncheckedCreateInputSchema ]),
}).strict()

export default MessageCreateArgsSchema;
