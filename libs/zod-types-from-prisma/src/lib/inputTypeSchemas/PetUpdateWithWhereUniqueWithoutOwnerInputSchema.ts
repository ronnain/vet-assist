import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetUpdateWithoutOwnerInputSchema } from './PetUpdateWithoutOwnerInputSchema';
import { PetUncheckedUpdateWithoutOwnerInputSchema } from './PetUncheckedUpdateWithoutOwnerInputSchema';

export const PetUpdateWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.PetUpdateWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => PetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PetUpdateWithoutOwnerInputSchema),z.lazy(() => PetUncheckedUpdateWithoutOwnerInputSchema) ]),
}).strict();

export default PetUpdateWithWhereUniqueWithoutOwnerInputSchema;
