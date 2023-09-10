import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ReadAtUncheckedCreateInputSchema: z.ZodType<Prisma.ReadAtUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  readAt: z.coerce.date().optional(),
  userId: z.number().int(),
  messageId: z.number().int()
}).strict();

export default ReadAtUncheckedCreateInputSchema;
