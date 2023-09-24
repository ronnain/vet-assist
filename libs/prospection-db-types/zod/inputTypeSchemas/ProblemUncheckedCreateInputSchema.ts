import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProblemUncheckedCreateInputSchema: z.ZodType<Prisma.ProblemUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  description: z.string(),
  prospectId: z.number().int().optional().nullable()
}).strict();

export default ProblemUncheckedCreateInputSchema;
