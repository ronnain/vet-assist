import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProblemUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProblemUpdateManyMutationInputSchema'
import { ProblemUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProblemUncheckedUpdateManyInputSchema'
import { ProblemWhereInputSchema } from '../inputTypeSchemas/ProblemWhereInputSchema'

export const ProblemUpdateManyArgsSchema: z.ZodType<Prisma.ProblemUpdateManyArgs> = z.object({
  data: z.union([ ProblemUpdateManyMutationInputSchema,ProblemUncheckedUpdateManyInputSchema ]),
  where: ProblemWhereInputSchema.optional(),
}).strict()

export default ProblemUpdateManyArgsSchema;
