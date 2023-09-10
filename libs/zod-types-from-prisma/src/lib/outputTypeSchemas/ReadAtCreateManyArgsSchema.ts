import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReadAtCreateManyInputSchema } from '../inputTypeSchemas/ReadAtCreateManyInputSchema'

export const ReadAtCreateManyArgsSchema: z.ZodType<Prisma.ReadAtCreateManyArgs> = z.object({
  data: z.union([ ReadAtCreateManyInputSchema,ReadAtCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default ReadAtCreateManyArgsSchema;
