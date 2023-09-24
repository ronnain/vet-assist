import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProspectWhereInputSchema } from './ProspectWhereInputSchema';

export const ProspectNullableRelationFilterSchema: z.ZodType<Prisma.ProspectNullableRelationFilter> = z.object({
  is: z.lazy(() => ProspectWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ProspectWhereInputSchema).optional().nullable()
}).strict();

export default ProspectNullableRelationFilterSchema;
