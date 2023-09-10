import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetCreateWithoutOwnerInputSchema } from './PetCreateWithoutOwnerInputSchema';
import { PetUncheckedCreateWithoutOwnerInputSchema } from './PetUncheckedCreateWithoutOwnerInputSchema';
import { PetCreateOrConnectWithoutOwnerInputSchema } from './PetCreateOrConnectWithoutOwnerInputSchema';
import { PetUpsertWithWhereUniqueWithoutOwnerInputSchema } from './PetUpsertWithWhereUniqueWithoutOwnerInputSchema';
import { PetCreateManyOwnerInputEnvelopeSchema } from './PetCreateManyOwnerInputEnvelopeSchema';
import { PetWhereUniqueInputSchema } from './PetWhereUniqueInputSchema';
import { PetUpdateWithWhereUniqueWithoutOwnerInputSchema } from './PetUpdateWithWhereUniqueWithoutOwnerInputSchema';
import { PetUpdateManyWithWhereWithoutOwnerInputSchema } from './PetUpdateManyWithWhereWithoutOwnerInputSchema';
import { PetScalarWhereInputSchema } from './PetScalarWhereInputSchema';

export const PetUncheckedUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.PetUncheckedUpdateManyWithoutOwnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => PetCreateWithoutOwnerInputSchema),z.lazy(() => PetCreateWithoutOwnerInputSchema).array(),z.lazy(() => PetUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => PetUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PetCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => PetCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PetUpsertWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => PetUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PetCreateManyOwnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PetWhereUniqueInputSchema),z.lazy(() => PetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PetUpdateWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => PetUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PetUpdateManyWithWhereWithoutOwnerInputSchema),z.lazy(() => PetUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PetScalarWhereInputSchema),z.lazy(() => PetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PetUncheckedUpdateManyWithoutOwnerNestedInputSchema;
