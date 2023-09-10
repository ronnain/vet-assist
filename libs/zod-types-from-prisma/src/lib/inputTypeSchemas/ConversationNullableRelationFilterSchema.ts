import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConversationWhereInputSchema } from './ConversationWhereInputSchema';

export const ConversationNullableRelationFilterSchema: z.ZodType<Prisma.ConversationNullableRelationFilter> = z.object({
  is: z.lazy(() => ConversationWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ConversationWhereInputSchema).optional().nullable()
}).strict();

export default ConversationNullableRelationFilterSchema;
