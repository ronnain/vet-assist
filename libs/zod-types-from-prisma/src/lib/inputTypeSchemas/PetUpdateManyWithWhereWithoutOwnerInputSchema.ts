import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetScalarWhereInputSchema } from './PetScalarWhereInputSchema';
import { PetUpdateManyMutationInputSchema } from './PetUpdateManyMutationInputSchema';
import { PetUncheckedUpdateManyWithoutOwnerInputSchema } from './PetUncheckedUpdateManyWithoutOwnerInputSchema';

export const PetUpdateManyWithWhereWithoutOwnerInputSchema: z.ZodType<Prisma.PetUpdateManyWithWhereWithoutOwnerInput> = z.object({
  where: z.lazy(() => PetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PetUpdateManyMutationInputSchema),z.lazy(() => PetUncheckedUpdateManyWithoutOwnerInputSchema) ]),
}).strict();

export default PetUpdateManyWithWhereWithoutOwnerInputSchema;
