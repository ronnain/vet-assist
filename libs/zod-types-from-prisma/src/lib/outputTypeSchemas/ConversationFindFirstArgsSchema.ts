import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConversationIncludeSchema } from '../inputTypeSchemas/ConversationIncludeSchema'
import { ConversationWhereInputSchema } from '../inputTypeSchemas/ConversationWhereInputSchema'
import { ConversationOrderByWithRelationInputSchema } from '../inputTypeSchemas/ConversationOrderByWithRelationInputSchema'
import { ConversationWhereUniqueInputSchema } from '../inputTypeSchemas/ConversationWhereUniqueInputSchema'
import { ConversationScalarFieldEnumSchema } from '../inputTypeSchemas/ConversationScalarFieldEnumSchema'
import { MessageFindManyArgsSchema } from "../outputTypeSchemas/MessageFindManyArgsSchema"
import { UserFindManyArgsSchema } from "../outputTypeSchemas/UserFindManyArgsSchema"
import { ConversationCountOutputTypeArgsSchema } from "../outputTypeSchemas/ConversationCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ConversationSelectSchema: z.ZodType<Prisma.ConversationSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  messages: z.union([z.boolean(),z.lazy(() => MessageFindManyArgsSchema)]).optional(),
  users: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ConversationCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ConversationFindFirstArgsSchema: z.ZodType<Prisma.ConversationFindFirstArgs> = z.object({
  select: ConversationSelectSchema.optional(),
  include: ConversationIncludeSchema.optional(),
  where: ConversationWhereInputSchema.optional(),
  orderBy: z.union([ ConversationOrderByWithRelationInputSchema.array(),ConversationOrderByWithRelationInputSchema ]).optional(),
  cursor: ConversationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ConversationScalarFieldEnumSchema,ConversationScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default ConversationFindFirstArgsSchema;