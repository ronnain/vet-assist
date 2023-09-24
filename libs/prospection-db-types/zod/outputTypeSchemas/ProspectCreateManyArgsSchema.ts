import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProspectCreateManyInputSchema } from '../inputTypeSchemas/ProspectCreateManyInputSchema'

export const ProspectCreateManyArgsSchema: z.ZodType<Prisma.ProspectCreateManyArgs> = z.object({
  data: z.union([ ProspectCreateManyInputSchema,ProspectCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default ProspectCreateManyArgsSchema;
