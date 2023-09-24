import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProblemWhereInputSchema } from './ProblemWhereInputSchema';

export const ProblemNullableRelationFilterSchema: z.ZodType<Prisma.ProblemNullableRelationFilter> = z.object({
  is: z.lazy(() => ProblemWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ProblemWhereInputSchema).optional().nullable()
}).strict();

export default ProblemNullableRelationFilterSchema;
