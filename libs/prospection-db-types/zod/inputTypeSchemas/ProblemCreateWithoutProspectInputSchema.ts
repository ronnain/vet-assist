import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProblemCreateWithoutProspectInputSchema: z.ZodType<Prisma.ProblemCreateWithoutProspectInput> = z.object({
  createdAt: z.coerce.date().optional(),
  description: z.string()
}).strict();

export default ProblemCreateWithoutProspectInputSchema;
