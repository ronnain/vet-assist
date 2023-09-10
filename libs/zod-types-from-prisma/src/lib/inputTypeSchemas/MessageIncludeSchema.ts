import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { ReadAtFindManyArgsSchema } from "../outputTypeSchemas/ReadAtFindManyArgsSchema"
import { ConversationArgsSchema } from "../outputTypeSchemas/ConversationArgsSchema"
import { MessageCountOutputTypeArgsSchema } from "../outputTypeSchemas/MessageCountOutputTypeArgsSchema"

export const MessageIncludeSchema: z.ZodType<Prisma.MessageInclude> = z.object({
  author: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  recipientsFirstTimeRead: z.union([z.boolean(),z.lazy(() => ReadAtFindManyArgsSchema)]).optional(),
  conversation: z.union([z.boolean(),z.lazy(() => ConversationArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MessageCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default MessageIncludeSchema;
