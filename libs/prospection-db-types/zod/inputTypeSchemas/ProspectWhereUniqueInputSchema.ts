import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProspectWhereInputSchema } from './ProspectWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const ProspectWhereUniqueInputSchema: z.ZodType<Prisma.ProspectWhereUniqueInput> = z.union([
  z.object({
    id: z.number(),
    email: z.string(),
    unsubscribeLink: z.string()
  }),
  z.object({
    id: z.number(),
    email: z.string(),
  }),
  z.object({
    id: z.number(),
    unsubscribeLink: z.string(),
  }),
  z.object({
    id: z.number(),
  }),
  z.object({
    email: z.string(),
    unsubscribeLink: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
  z.object({
    unsubscribeLink: z.string(),
  }),
])
.and(z.object({
  id: z.number().optional(),
  email: z.string().optional(),
  unsubscribeLink: z.string().optional(),
  AND: z.union([ z.lazy(() => ProspectWhereInputSchema),z.lazy(() => ProspectWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProspectWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProspectWhereInputSchema),z.lazy(() => ProspectWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  offerName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  offerDescription: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rgpd: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  unsubscribe: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  problem: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export default ProspectWhereUniqueInputSchema;
