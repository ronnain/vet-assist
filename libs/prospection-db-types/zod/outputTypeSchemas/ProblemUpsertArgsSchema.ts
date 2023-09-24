import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProblemIncludeSchema } from '../inputTypeSchemas/ProblemIncludeSchema'
import { ProblemWhereUniqueInputSchema } from '../inputTypeSchemas/ProblemWhereUniqueInputSchema'
import { ProblemCreateInputSchema } from '../inputTypeSchemas/ProblemCreateInputSchema'
import { ProblemUncheckedCreateInputSchema } from '../inputTypeSchemas/ProblemUncheckedCreateInputSchema'
import { ProblemUpdateInputSchema } from '../inputTypeSchemas/ProblemUpdateInputSchema'
import { ProblemUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProblemUncheckedUpdateInputSchema'
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

export const ProblemUpsertArgsSchema: z.ZodType<Prisma.ProblemUpsertArgs> = z.object({
  select: ProblemSelectSchema.optional(),
  include: ProblemIncludeSchema.optional(),
  where: ProblemWhereUniqueInputSchema,
  create: z.union([ ProblemCreateInputSchema,ProblemUncheckedCreateInputSchema ]),
  update: z.union([ ProblemUpdateInputSchema,ProblemUncheckedUpdateInputSchema ]),
}).strict()

export default ProblemUpsertArgsSchema;
