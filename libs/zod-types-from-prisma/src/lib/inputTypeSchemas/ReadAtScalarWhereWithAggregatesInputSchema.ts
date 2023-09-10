import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ReadAtScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReadAtScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ReadAtScalarWhereWithAggregatesInputSchema),z.lazy(() => ReadAtScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReadAtScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReadAtScalarWhereWithAggregatesInputSchema),z.lazy(() => ReadAtScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  readAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  messageId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default ReadAtScalarWhereWithAggregatesInputSchema;
