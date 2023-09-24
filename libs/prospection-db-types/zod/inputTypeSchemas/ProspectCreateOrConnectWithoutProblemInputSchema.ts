import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProspectWhereUniqueInputSchema } from './ProspectWhereUniqueInputSchema';
import { ProspectCreateWithoutProblemInputSchema } from './ProspectCreateWithoutProblemInputSchema';
import { ProspectUncheckedCreateWithoutProblemInputSchema } from './ProspectUncheckedCreateWithoutProblemInputSchema';

export const ProspectCreateOrConnectWithoutProblemInputSchema: z.ZodType<Prisma.ProspectCreateOrConnectWithoutProblemInput> = z.object({
  where: z.lazy(() => ProspectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProspectCreateWithoutProblemInputSchema),z.lazy(() => ProspectUncheckedCreateWithoutProblemInputSchema) ]),
}).strict();

export default ProspectCreateOrConnectWithoutProblemInputSchema;
