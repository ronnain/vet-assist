import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProblemIncludeSchema } from '../inputTypeSchemas/ProblemIncludeSchema'
import { ProblemCreateInputSchema } from '../inputTypeSchemas/ProblemCreateInputSchema'
import { ProblemUncheckedCreateInputSchema } from '../inputTypeSchemas/ProblemUncheckedCreateInputSchema'
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

export const ProblemCreateArgsSchema: z.ZodType<Prisma.ProblemCreateArgs> = z.object({
  select: ProblemSelectSchema.optional(),
  include: ProblemIncludeSchema.optional(),
  data: z.union([ ProblemCreateInputSchema,ProblemUncheckedCreateInputSchema ]),
}).strict()

export default ProblemCreateArgsSchema;
