import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetCreateWithoutOwnerInputSchema } from './PetCreateWithoutOwnerInputSchema';
import { PetUncheckedCreateWithoutOwnerInputSchema } from './PetUncheckedCreateWithoutOwnerInputSchema';
import { PetCreateOrConnectWithoutOwnerInputSchema } from './PetCreateOrConnectWithoutOwnerInputSchema';
import { PetCreateManyOwnerInputEnvelopeSchema } from './PetCreateManyOwnerInputEnvelopeSchema';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';

export const PetUncheckedCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.PetUncheckedCreateNestedManyWithoutOwnerInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutOwnerInputSchema),z.lazy(() => PetCreateWithoutOwnerInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => PetUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => PetCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PetCreateManyOwnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PetUncheckedCreateNestedManyWithoutOwnerInputSchema;
