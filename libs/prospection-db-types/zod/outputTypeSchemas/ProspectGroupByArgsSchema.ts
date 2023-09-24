import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProspectWhereInputSchema } from '../inputTypeSchemas/ProspectWhereInputSchema'
import { ProspectOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProspectOrderByWithAggregationInputSchema'
import { ProspectScalarFieldEnumSchema } from '../inputTypeSchemas/ProspectScalarFieldEnumSchema'
import { ProspectScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProspectScalarWhereWithAggregatesInputSchema'

export const ProspectGroupByArgsSchema: z.ZodType<Prisma.ProspectGroupByArgs> = z.object({
  where: ProspectWhereInputSchema.optional(),
  orderBy: z.union([ ProspectOrderByWithAggregationInputSchema.array(),ProspectOrderByWithAggregationInputSchema ]).optional(),
  by: ProspectScalarFieldEnumSchema.array(),
  having: ProspectScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ProspectGroupByArgsSchema;
