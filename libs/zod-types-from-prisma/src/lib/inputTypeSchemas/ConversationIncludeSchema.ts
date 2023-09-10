import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MessageFindManyArgsSchema } from "../outputTypeSchemas/MessageFindManyArgsSchema"
import { UserFindManyArgsSchema } from "../outputTypeSchemas/UserFindManyArgsSchema"
import { ConversationCountOutputTypeArgsSchema } from "../outputTypeSchemas/ConversationCountOutputTypeArgsSchema"

export const ConversationIncludeSchema: z.ZodType<Prisma.ConversationInclude> = z.object({
  messages: z.union([z.boolean(),z.lazy(() => MessageFindManyArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ConversationCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ConversationIncludeSchema;
