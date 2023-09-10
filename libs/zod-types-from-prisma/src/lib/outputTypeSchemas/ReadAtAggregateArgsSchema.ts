import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReadAtWhereInputSchema } from '../inputTypeSchemas/ReadAtWhereInputSchema'
import { ReadAtOrderByWithRelationInputSchema } from '../inputTypeSchemas/ReadAtOrderByWithRelationInputSchema'
import { ReadAtWhereUniqueInputSchema } from '../inputTypeSchemas/ReadAtWhereUniqueInputSchema'

export const ReadAtAggregateArgsSchema: z.ZodType<Prisma.ReadAtAggregateArgs> = z.object({
  where: ReadAtWhereInputSchema.optional(),
  orderBy: z.union([ ReadAtOrderByWithRelationInputSchema.array(),ReadAtOrderByWithRelationInputSchema ]).optional(),
  cursor: ReadAtWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export default ReadAtAggregateArgsSchema;
