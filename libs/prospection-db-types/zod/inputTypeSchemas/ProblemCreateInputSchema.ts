import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProspectCreateNestedOneWithoutProblemInputSchema } from './ProspectCreateNestedOneWithoutProblemInputSchema';

export const ProblemCreateInputSchema: z.ZodType<Prisma.ProblemCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  description: z.string(),
  prospect: z.lazy(() => ProspectCreateNestedOneWithoutProblemInputSchema).optional()
}).strict();

export default ProblemCreateInputSchema;
