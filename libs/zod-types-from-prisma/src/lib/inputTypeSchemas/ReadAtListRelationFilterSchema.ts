import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReadAtWhereInputSchema } from './ReadAtWhereInputSchema';

export const ReadAtListRelationFilterSchema: z.ZodType<Prisma.ReadAtListRelationFilter> = z.object({
  every: z.lazy(() => ReadAtWhereInputSchema).optional(),
  some: z.lazy(() => ReadAtWhereInputSchema).optional(),
  none: z.lazy(() => ReadAtWhereInputSchema).optional()
}).strict();

export default ReadAtListRelationFilterSchema;
