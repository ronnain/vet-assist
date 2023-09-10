import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageWhereInputSchema } from './MessageWhereInputSchema';

export const MessageRelationFilterSchema: z.ZodType<Prisma.MessageRelationFilter> = z.object({
  is: z.lazy(() => MessageWhereInputSchema).optional(),
  isNot: z.lazy(() => MessageWhereInputSchema).optional()
}).strict();

export default MessageRelationFilterSchema;
