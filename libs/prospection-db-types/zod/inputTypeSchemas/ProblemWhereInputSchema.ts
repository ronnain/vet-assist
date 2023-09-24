import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { ProspectNullableRelationFilterSchema } from './ProspectNullableRelationFilterSchema';
import { ProspectWhereInputSchema } from './ProspectWhereInputSchema';

export const ProblemWhereInputSchema: z.ZodType<Prisma.ProblemWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProblemWhereInputSchema),z.lazy(() => ProblemWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProblemWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProblemWhereInputSchema),z.lazy(() => ProblemWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  prospectId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  prospect: z.union([ z.lazy(() => ProspectNullableRelationFilterSchema),z.lazy(() => ProspectWhereInputSchema) ]).optional().nullable(),
}).strict();

export default ProblemWhereInputSchema;
