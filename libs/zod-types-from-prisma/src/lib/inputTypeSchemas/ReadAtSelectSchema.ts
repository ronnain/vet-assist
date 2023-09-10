import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { MessageArgsSchema } from "../outputTypeSchemas/MessageArgsSchema"

export const ReadAtSelectSchema: z.ZodType<Prisma.ReadAtSelect> = z.object({
  id: z.boolean().optional(),
  readAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  messageId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  message: z.union([z.boolean(),z.lazy(() => MessageArgsSchema)]).optional(),
}).strict()

export default ReadAtSelectSchema;
