import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { MessageArgsSchema } from "../outputTypeSchemas/MessageArgsSchema"

export const ReadAtIncludeSchema: z.ZodType<Prisma.ReadAtInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  message: z.union([z.boolean(),z.lazy(() => MessageArgsSchema)]).optional(),
}).strict()

export default ReadAtIncludeSchema;
