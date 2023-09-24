import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProblemWhereInputSchema } from '../inputTypeSchemas/ProblemWhereInputSchema'
import { ProblemOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProblemOrderByWithAggregationInputSchema'
import { ProblemScalarFieldEnumSchema } from '../inputTypeSchemas/ProblemScalarFieldEnumSchema'
import { ProblemScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProblemScalarWhereWithAggregatesInputSchema'

export const ProblemGroupByArgsSchema: z.ZodType<Prisma.ProblemGroupByArgs> = z.object({
  where: ProblemWhereInputSchema.optional(),
  orderBy: z.union([ ProblemOrderByWithAggregationInputSchema.array(),ProblemOrderByWithAggregationInputSchema ]).optional(),
  by: ProblemScalarFieldEnumSchema.array(),
  having: ProblemScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ProblemGroupByArgsSchema;
