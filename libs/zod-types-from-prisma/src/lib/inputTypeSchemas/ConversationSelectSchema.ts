import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MessageFindManyArgsSchema } from "../outputTypeSchemas/MessageFindManyArgsSchema"
import { UserFindManyArgsSchema } from "../outputTypeSchemas/UserFindManyArgsSchema"
import { ConversationCountOutputTypeArgsSchema } from "../outputTypeSchemas/ConversationCountOutputTypeArgsSchema"

export const ConversationSelectSchema: z.ZodType<Prisma.ConversationSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  type: z.boolean().optional(),
  messages: z.union([z.boolean(),z.lazy(() => MessageFindManyArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ConversationCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ConversationSelectSchema;
