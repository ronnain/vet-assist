import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReadAtIncludeSchema } from '../inputTypeSchemas/ReadAtIncludeSchema'
import { ReadAtWhereInputSchema } from '../inputTypeSchemas/ReadAtWhereInputSchema'
import { ReadAtOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReadAtOrderByWithRelationInputSchema'
import { ReadAtWhereUniqueInputSchema } from '../inputTypeSchemas/ReadAtWhereUniqueInputSchema'
import { ReadAtScalarFieldEnumSchema } from '../inputTypeSchemas/ReadAtScalarFieldEnumSchema'
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

export const ReadAtFindFirstArgsSchema: z.ZodType<Prisma.ReadAtFindFirstArgs> = z.object({
  select: ReadAtSelectSchema.optional(),
  include: ReadAtIncludeSchema.optional(),
  where: ReadAtWhereInputSchema.optional(),
  orderBy: z.union([ ReadAtOrderByWithRelationInputSchema.array(),ReadAtOrderByWithRelationInputSchema ]).optional(),
  cursor: ReadAtWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReadAtScalarFieldEnumSchema,ReadAtScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default ReadAtFindFirstArgsSchema;
