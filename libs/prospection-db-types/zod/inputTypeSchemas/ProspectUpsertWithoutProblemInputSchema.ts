import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProspectUpdateWithoutProblemInputSchema } from './ProspectUpdateWithoutProblemInputSchema';
import { ProspectUncheckedUpdateWithoutProblemInputSchema } from './ProspectUncheckedUpdateWithoutProblemInputSchema';
import { ProspectCreateWithoutProblemInputSchema } from './ProspectCreateWithoutProblemInputSchema';
import { ProspectUncheckedCreateWithoutProblemInputSchema } from './ProspectUncheckedCreateWithoutProblemInputSchema';
import { ProspectWhereInputSchema } from './ProspectWhereInputSchema';

export const ProspectUpsertWithoutProblemInputSchema: z.ZodType<Prisma.ProspectUpsertWithoutProblemInput> = z.object({
  update: z.union([ z.lazy(() => ProspectUpdateWithoutProblemInputSchema),z.lazy(() => ProspectUncheckedUpdateWithoutProblemInputSchema) ]),
  create: z.union([ z.lazy(() => ProspectCreateWithoutProblemInputSchema),z.lazy(() => ProspectUncheckedCreateWithoutProblemInputSchema) ]),
  where: z.lazy(() => ProspectWhereInputSchema).optional()
}).strict();

export default ProspectUpsertWithoutProblemInputSchema;
