import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const ProspectScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProspectScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProspectScalarWhereWithAggregatesInputSchema),z.lazy(() => ProspectScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProspectScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProspectScalarWhereWithAggregatesInputSchema),z.lazy(() => ProspectScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  offerName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  offerDescription: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rgpd: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  unsubscribe: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  unsubscribeLink: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default ProspectScalarWhereWithAggregatesInputSchema;
