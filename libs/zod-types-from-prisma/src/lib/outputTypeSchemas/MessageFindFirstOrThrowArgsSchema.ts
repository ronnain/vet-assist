import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MessageIncludeSchema } from '../inputTypeSchemas/MessageIncludeSchema'
import { MessageWhereInputSchema } from '../inputTypeSchemas/MessageWhereInputSchema'
import { MessageOrderByWithRelationInputSchema } from '../inputTypeSchemas/MessageOrderByWithRelationInputSchema'
import { MessageWhereUniqueInputSchema } from '../inputTypeSchemas/MessageWhereUniqueInputSchema'
import { MessageScalarFieldEnumSchema } from '../inputTypeSchemas/MessageScalarFieldEnumSchema'
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

export const MessageFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MessageFindFirstOrThrowArgs> = z.object({
  select: MessageSelectSchema.optional(),
  include: MessageIncludeSchema.optional(),
  where: MessageWhereInputSchema.optional(),
  orderBy: z.union([ MessageOrderByWithRelationInputSchema.array(),MessageOrderByWithRelationInputSchema ]).optional(),
  cursor: MessageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MessageScalarFieldEnumSchema,MessageScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default MessageFindFirstOrThrowArgsSchema;