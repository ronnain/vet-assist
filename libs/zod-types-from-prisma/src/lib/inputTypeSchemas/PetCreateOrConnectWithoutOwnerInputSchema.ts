import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetCreateWithoutOwnerInputSchema } from './PetCreateWithoutOwnerInputSchema';
import { PetUncheckedCreateWithoutOwnerInputSchema } from './PetUncheckedCreateWithoutOwnerInputSchema';

export const PetCreateOrConnectWithoutOwnerInputSchema: z.ZodType<Prisma.PetCreateOrConnectWithoutOwnerInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PetCreateWithoutOwnerInputSchema),z.lazy(() => PetUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export default PetCreateOrConnectWithoutOwnerInputSchema;
