import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProblemUncheckedCreateWithoutProspectInputSchema: z.ZodType<Prisma.ProblemUncheckedCreateWithoutProspectInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  description: z.string()
}).strict();

export default ProblemUncheckedCreateWithoutProspectInputSchema;
