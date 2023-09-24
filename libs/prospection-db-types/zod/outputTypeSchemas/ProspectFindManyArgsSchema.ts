import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProspectIncludeSchema } from '../inputTypeSchemas/ProspectIncludeSchema'
import { ProspectWhereInputSchema } from '../inputTypeSchemas/ProspectWhereInputSchema'
import { ProspectOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProspectOrderByWithRelationInputSchema'
import { ProspectWhereUniqueInputSchema } from '../inputTypeSchemas/ProspectWhereUniqueInputSchema'
import { ProspectScalarFieldEnumSchema } from '../inputTypeSchemas/ProspectScalarFieldEnumSchema'
import { ProblemArgsSchema } from "../outputTypeSchemas/ProblemArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProspectSelectSchema: z.ZodType<Prisma.ProspectSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  email: z.boolean().optional(),
  offerName: z.boolean().optional(),
  offerDescription: z.boolean().optional(),
  rgpd: z.boolean().optional(),
  unsubscribe: z.boolean().optional(),
  unsubscribeLink: z.boolean().optional(),
  problem: z.union([z.boolean(),z.lazy(() => ProblemArgsSchema)]).optional(),
}).strict()

export const ProspectFindManyArgsSchema: z.ZodType<Prisma.ProspectFindManyArgs> = z.object({
  select: ProspectSelectSchema.optional(),
  include: ProspectIncludeSchema.optional(),
  where: ProspectWhereInputSchema.optional(),
  orderBy: z.union([ ProspectOrderByWithRelationInputSchema.array(),ProspectOrderByWithRelationInputSchema ]).optional(),
  cursor: ProspectWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProspectScalarFieldEnumSchema,ProspectScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default ProspectFindManyArgsSchema;
