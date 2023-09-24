import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProspectUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProspectUpdateManyMutationInputSchema'
import { ProspectUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProspectUncheckedUpdateManyInputSchema'
import { ProspectWhereInputSchema } from '../inputTypeSchemas/ProspectWhereInputSchema'

export const ProspectUpdateManyArgsSchema: z.ZodType<Prisma.ProspectUpdateManyArgs> = z.object({
  data: z.union([ ProspectUpdateManyMutationInputSchema,ProspectUncheckedUpdateManyInputSchema ]),
  where: ProspectWhereInputSchema.optional(),
}).strict()

export default ProspectUpdateManyArgsSchema;
