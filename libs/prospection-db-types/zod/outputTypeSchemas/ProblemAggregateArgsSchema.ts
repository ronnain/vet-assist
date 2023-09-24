import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProblemWhereInputSchema } from '../inputTypeSchemas/ProblemWhereInputSchema'
import { ProblemOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProblemOrderByWithRelationInputSchema'
import { ProblemWhereUniqueInputSchema } from '../inputTypeSchemas/ProblemWhereUniqueInputSchema'

export const ProblemAggregateArgsSchema: z.ZodType<Prisma.ProblemAggregateArgs> = z.object({
  where: ProblemWhereInputSchema.optional(),
  orderBy: z.union([ ProblemOrderByWithRelationInputSchema.array(),ProblemOrderByWithRelationInputSchema ]).optional(),
  cursor: ProblemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ProblemAggregateArgsSchema;
