import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MessageFindManyArgsSchema } from "../outputTypeSchemas/MessageFindManyArgsSchema"
import { ReadAtFindManyArgsSchema } from "../outputTypeSchemas/ReadAtFindManyArgsSchema"
import { ConversationFindManyArgsSchema } from "../outputTypeSchemas/ConversationFindManyArgsSchema"
import { PetFindManyArgsSchema } from "../outputTypeSchemas/PetFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  phone: z.boolean().optional(),
  role: z.boolean().optional(),
  authorMessages: z.union([z.boolean(),z.lazy(() => MessageFindManyArgsSchema)]).optional(),
  firstTimeReadMessages: z.union([z.boolean(),z.lazy(() => ReadAtFindManyArgsSchema)]).optional(),
  conversations: z.union([z.boolean(),z.lazy(() => ConversationFindManyArgsSchema)]).optional(),
  pets: z.union([z.boolean(),z.lazy(() => PetFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UserSelectSchema;
