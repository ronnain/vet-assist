import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReadAtWhereInputSchema } from '../inputTypeSchemas/ReadAtWhereInputSchema'
import { ReadAtOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ReadAtOrderByWithAggregationInputSchema'
import { ReadAtScalarFieldEnumSchema } from '../inputTypeSchemas/ReadAtScalarFieldEnumSchema'
import { ReadAtScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ReadAtScalarWhereWithAggregatesInputSchema'

export const ReadAtGroupByArgsSchema: z.ZodType<Prisma.ReadAtGroupByArgs> = z.object({
  where: ReadAtWhereInputSchema.optional(),
  orderBy: z.union([ ReadAtOrderByWithAggregationInputSchema.array(),ReadAtOrderByWithAggregationInputSchema ]).optional(),
  by: ReadAtScalarFieldEnumSchema.array(),
  having: ReadAtScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ReadAtGroupByArgsSchema;
