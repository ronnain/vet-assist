import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ConversationScalarWhereInputSchema: z.ZodType<Prisma.ConversationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ConversationScalarWhereInputSchema),z.lazy(() => ConversationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ConversationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ConversationScalarWhereInputSchema),z.lazy(() => ConversationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default ConversationScalarWhereInputSchema;
