import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProspectWhereInputSchema } from './ProspectWhereInputSchema';
import { ProspectUpdateWithoutProblemInputSchema } from './ProspectUpdateWithoutProblemInputSchema';
import { ProspectUncheckedUpdateWithoutProblemInputSchema } from './ProspectUncheckedUpdateWithoutProblemInputSchema';

export const ProspectUpdateToOneWithWhereWithoutProblemInputSchema: z.ZodType<Prisma.ProspectUpdateToOneWithWhereWithoutProblemInput> = z.object({
  where: z.lazy(() => ProspectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProspectUpdateWithoutProblemInputSchema),z.lazy(() => ProspectUncheckedUpdateWithoutProblemInputSchema) ]),
}).strict();

export default ProspectUpdateToOneWithWhereWithoutProblemInputSchema;
