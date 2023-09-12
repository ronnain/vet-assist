import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConversationTypeSchema } from './ConversationTypeSchema';

export const ConversationCreateManyInputSchema: z.ZodType<Prisma.ConversationCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  type: z.lazy(() => ConversationTypeSchema)
}).strict();

export default ConversationCreateManyInputSchema;
