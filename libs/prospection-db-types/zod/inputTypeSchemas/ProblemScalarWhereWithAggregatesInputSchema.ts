import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';

export const ProblemScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProblemScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProblemScalarWhereWithAggregatesInputSchema),z.lazy(() => ProblemScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProblemScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProblemScalarWhereWithAggregatesInputSchema),z.lazy(() => ProblemScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  prospectId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export default ProblemScalarWhereWithAggregatesInputSchema;
