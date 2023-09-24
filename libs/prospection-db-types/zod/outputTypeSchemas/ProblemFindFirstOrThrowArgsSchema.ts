import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProblemIncludeSchema } from '../inputTypeSchemas/ProblemIncludeSchema'
import { ProblemWhereInputSchema } from '../inputTypeSchemas/ProblemWhereInputSchema'
import { ProblemOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProblemOrderByWithRelationInputSchema'
import { ProblemWhereUniqueInputSchema } from '../inputTypeSchemas/ProblemWhereUniqueInputSchema'
import { ProblemScalarFieldEnumSchema } from '../inputTypeSchemas/ProblemScalarFieldEnumSchema'
import { ProspectArgsSchema } from "../outputTypeSchemas/ProspectArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProblemSelectSchema: z.ZodType<Prisma.ProblemSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  description: z.boolean().optional(),
  prospectId: z.boolean().optional(),
  prospect: z.union([z.boolean(),z.lazy(() => ProspectArgsSchema)]).optional(),
}).strict()

export const ProblemFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProblemFindFirstOrThrowArgs> = z.object({
  select: ProblemSelectSchema.optional(),
  include: ProblemIncludeSchema.optional(),
  where: ProblemWhereInputSchema.optional(),
  orderBy: z.union([ ProblemOrderByWithRelationInputSchema.array(),ProblemOrderByWithRelationInputSchema ]).optional(),
  cursor: ProblemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProblemScalarFieldEnumSchema,ProblemScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default ProblemFindFirstOrThrowArgsSchema;
