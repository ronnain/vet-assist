import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProblemIncludeSchema } from '../inputTypeSchemas/ProblemIncludeSchema'
import { ProblemUpdateInputSchema } from '../inputTypeSchemas/ProblemUpdateInputSchema'
import { ProblemUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProblemUncheckedUpdateInputSchema'
import { ProblemWhereUniqueInputSchema } from '../inputTypeSchemas/ProblemWhereUniqueInputSchema'
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

export const ProblemUpdateArgsSchema: z.ZodType<Prisma.ProblemUpdateArgs> = z.object({
  select: ProblemSelectSchema.optional(),
  include: ProblemIncludeSchema.optional(),
  data: z.union([ ProblemUpdateInputSchema,ProblemUncheckedUpdateInputSchema ]),
  where: ProblemWhereUniqueInputSchema,
}).strict()

export default ProblemUpdateArgsSchema;
