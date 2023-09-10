import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReadAtUpdateManyMutationInputSchema } from '../inputTypeSchemas/ReadAtUpdateManyMutationInputSchema'
import { ReadAtUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ReadAtUncheckedUpdateManyInputSchema'
import { ReadAtWhereInputSchema } from '../inputTypeSchemas/ReadAtWhereInputSchema'

export const ReadAtUpdateManyArgsSchema: z.ZodType<Prisma.ReadAtUpdateManyArgs> = z.object({
  data: z.union([ ReadAtUpdateManyMutationInputSchema,ReadAtUncheckedUpdateManyInputSchema ]),
  where: ReadAtWhereInputSchema.optional(),
}).strict()

export default ReadAtUpdateManyArgsSchema;
