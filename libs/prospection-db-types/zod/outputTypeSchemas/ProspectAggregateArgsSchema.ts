import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProspectWhereInputSchema } from '../inputTypeSchemas/ProspectWhereInputSchema'
import { ProspectOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProspectOrderByWithRelationInputSchema'
import { ProspectWhereUniqueInputSchema } from '../inputTypeSchemas/ProspectWhereUniqueInputSchema'

export const ProspectAggregateArgsSchema: z.ZodType<Prisma.ProspectAggregateArgs> = z.object({
  where: ProspectWhereInputSchema.optional(),
  orderBy: z.union([ ProspectOrderByWithRelationInputSchema.array(),ProspectOrderByWithRelationInputSchema ]).optional(),
  cursor: ProspectWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ProspectAggregateArgsSchema;
