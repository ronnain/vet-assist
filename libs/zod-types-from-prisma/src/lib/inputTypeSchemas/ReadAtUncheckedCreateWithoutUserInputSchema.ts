import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ReadAtUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ReadAtUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  readAt: z.coerce.date().optional(),
  messageId: z.number().int()
}).strict();

export default ReadAtUncheckedCreateWithoutUserInputSchema;