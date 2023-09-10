import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ReadAtScalarWhereInputSchema: z.ZodType<Prisma.ReadAtScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReadAtScalarWhereInputSchema),z.lazy(() => ReadAtScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReadAtScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReadAtScalarWhereInputSchema),z.lazy(() => ReadAtScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  readAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  messageId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default ReadAtScalarWhereInputSchema;
