import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProspectCreateWithoutProblemInputSchema } from './ProspectCreateWithoutProblemInputSchema';
import { ProspectUncheckedCreateWithoutProblemInputSchema } from './ProspectUncheckedCreateWithoutProblemInputSchema';
import { ProspectCreateOrConnectWithoutProblemInputSchema } from './ProspectCreateOrConnectWithoutProblemInputSchema';
import { ProspectWhereUniqueInputSchema } from './ProspectWhereUniqueInputSchema';

export const ProspectCreateNestedOneWithoutProblemInputSchema: z.ZodType<Prisma.ProspectCreateNestedOneWithoutProblemInput> = z.object({
  create: z.union([ z.lazy(() => ProspectCreateWithoutProblemInputSchema),z.lazy(() => ProspectUncheckedCreateWithoutProblemInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProspectCreateOrConnectWithoutProblemInputSchema).optional(),
  connect: z.lazy(() => ProspectWhereUniqueInputSchema).optional()
}).strict();

export default ProspectCreateNestedOneWithoutProblemInputSchema;
