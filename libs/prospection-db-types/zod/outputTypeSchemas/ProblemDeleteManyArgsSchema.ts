import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProblemWhereInputSchema } from '../inputTypeSchemas/ProblemWhereInputSchema'

export const ProblemDeleteManyArgsSchema: z.ZodType<Prisma.ProblemDeleteManyArgs> = z.object({
  where: ProblemWhereInputSchema.optional(),
}).strict()

export default ProblemDeleteManyArgsSchema;
