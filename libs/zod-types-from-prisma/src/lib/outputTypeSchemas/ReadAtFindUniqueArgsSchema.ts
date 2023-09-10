import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReadAtIncludeSchema } from '../inputTypeSchemas/ReadAtIncludeSchema'
import { ReadAtWhereUniqueInputSchema } from '../inputTypeSchemas/ReadAtWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { MessageArgsSchema } from "../outputTypeSchemas/MessageArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReadAtSelectSchema: z.ZodType<Prisma.ReadAtSelect> = z.object({
  id: z.boolean().optional(),
  readAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  messageId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  message: z.union([z.boolean(),z.lazy(() => MessageArgsSchema)]).optional(),
}).strict()

export const ReadAtFindUniqueArgsSchema: z.ZodType<Prisma.ReadAtFindUniqueArgs> = z.object({
  select: ReadAtSelectSchema.optional(),
  include: ReadAtIncludeSchema.optional(),
  where: ReadAtWhereUniqueInputSchema,
}).strict()

export default ReadAtFindUniqueArgsSchema;
