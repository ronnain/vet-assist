import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProspectCreateWithoutProblemInputSchema } from './ProspectCreateWithoutProblemInputSchema';
import { ProspectUncheckedCreateWithoutProblemInputSchema } from './ProspectUncheckedCreateWithoutProblemInputSchema';
import { ProspectCreateOrConnectWithoutProblemInputSchema } from './ProspectCreateOrConnectWithoutProblemInputSchema';
import { ProspectUpsertWithoutProblemInputSchema } from './ProspectUpsertWithoutProblemInputSchema';
import { ProspectWhereInputSchema } from './ProspectWhereInputSchema';
import { ProspectWhereUniqueInputSchema } from './ProspectWhereUniqueInputSchema';
import { ProspectUpdateToOneWithWhereWithoutProblemInputSchema } from './ProspectUpdateToOneWithWhereWithoutProblemInputSchema';
import { ProspectUpdateWithoutProblemInputSchema } from './ProspectUpdateWithoutProblemInputSchema';
import { ProspectUncheckedUpdateWithoutProblemInputSchema } from './ProspectUncheckedUpdateWithoutProblemInputSchema';

export const ProspectUpdateOneWithoutProblemNestedInputSchema: z.ZodType<Prisma.ProspectUpdateOneWithoutProblemNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProspectCreateWithoutProblemInputSchema),z.lazy(() => ProspectUncheckedCreateWithoutProblemInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProspectCreateOrConnectWithoutProblemInputSchema).optional(),
  upsert: z.lazy(() => ProspectUpsertWithoutProblemInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProspectWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProspectWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProspectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProspectUpdateToOneWithWhereWithoutProblemInputSchema),z.lazy(() => ProspectUpdateWithoutProblemInputSchema),z.lazy(() => ProspectUncheckedUpdateWithoutProblemInputSchema) ]).optional(),
}).strict();

export default ProspectUpdateOneWithoutProblemNestedInputSchema;
