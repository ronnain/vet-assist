import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetUpdateWithoutOwnerInputSchema } from './PetUpdateWithoutOwnerInputSchema';
import { PetUncheckedUpdateWithoutOwnerInputSchema } from './PetUncheckedUpdateWithoutOwnerInputSchema';
import { PetCreateWithoutOwnerInputSchema } from './PetCreateWithoutOwnerInputSchema';
import { PetUncheckedCreateWithoutOwnerInputSchema } from './PetUncheckedCreateWithoutOwnerInputSchema';

export const PetUpsertWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.PetUpsertWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PetUpdateWithoutOwnerInputSchema),z.lazy(() => PetUncheckedUpdateWithoutOwnerInputSchema) ]),
  create: z.union([ z.lazy(() => PetCreateWithoutOwnerInputSchema),z.lazy(() => PetUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export default PetUpsertWithWhereUniqueWithoutOwnerInputSchema;
