import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { MessageRelationFilterSchema } from './MessageRelationFilterSchema';
import { MessageWhereInputSchema } from './MessageWhereInputSchema';

export const ReadAtWhereInputSchema: z.ZodType<Prisma.ReadAtWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReadAtWhereInputSchema),z.lazy(() => ReadAtWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReadAtWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReadAtWhereInputSchema),z.lazy(() => ReadAtWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  readAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  messageId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  message: z.union([ z.lazy(() => MessageRelationFilterSchema),z.lazy(() => MessageWhereInputSchema) ]).optional(),
}).strict();

export default ReadAtWhereInputSchema;
