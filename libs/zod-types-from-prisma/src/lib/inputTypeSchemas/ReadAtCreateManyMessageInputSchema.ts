import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ReadAtCreateManyMessageInputSchema: z.ZodType<Prisma.ReadAtCreateManyMessageInput> = z.object({
  id: z.number().int().optional(),
  readAt: z.coerce.date().optional(),
  userId: z.number().int()
}).strict();

export default ReadAtCreateManyMessageInputSchema;
