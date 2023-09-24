import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProblemWhereInputSchema } from './ProblemWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { ProspectNullableRelationFilterSchema } from './ProspectNullableRelationFilterSchema';
import { ProspectWhereInputSchema } from './ProspectWhereInputSchema';

export const ProblemWhereUniqueInputSchema: z.ZodType<Prisma.ProblemWhereUniqueInput> = z.union([
  z.object({
    id: z.number(),
    prospectId: z.number()
  }),
  z.object({
    id: z.number(),
  }),
  z.object({
    prospectId: z.number(),
  }),
])
.and(z.object({
  id: z.number().optional(),
  prospectId: z.number().optional(),
  AND: z.union([ z.lazy(() => ProblemWhereInputSchema),z.lazy(() => ProblemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProblemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProblemWhereInputSchema),z.lazy(() => ProblemWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  prospect: z.union([ z.lazy(() => ProspectNullableRelationFilterSchema),z.lazy(() => ProspectWhereInputSchema) ]).optional().nullable(),
}).strict());

export default ProblemWhereUniqueInputSchema;
