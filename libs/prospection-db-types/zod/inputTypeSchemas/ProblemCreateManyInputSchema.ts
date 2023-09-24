import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProblemCreateManyInputSchema: z.ZodType<Prisma.ProblemCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  description: z.string(),
  prospectId: z.number().int().optional().nullable()
}).strict();

export default ProblemCreateManyInputSchema;
