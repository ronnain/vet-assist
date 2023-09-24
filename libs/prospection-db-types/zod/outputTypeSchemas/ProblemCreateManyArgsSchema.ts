import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProblemCreateManyInputSchema } from '../inputTypeSchemas/ProblemCreateManyInputSchema'

export const ProblemCreateManyArgsSchema: z.ZodType<Prisma.ProblemCreateManyArgs> = z.object({
  data: z.union([ ProblemCreateManyInputSchema,ProblemCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default ProblemCreateManyArgsSchema;
