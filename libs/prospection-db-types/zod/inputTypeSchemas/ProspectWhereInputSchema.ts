import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const ProspectWhereInputSchema: z.ZodType<Prisma.ProspectWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProspectWhereInputSchema),z.lazy(() => ProspectWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProspectWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProspectWhereInputSchema),z.lazy(() => ProspectWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  offerName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  offerDescription: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rgpd: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  unsubscribe: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  unsubscribeLink: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  problem: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default ProspectWhereInputSchema;
