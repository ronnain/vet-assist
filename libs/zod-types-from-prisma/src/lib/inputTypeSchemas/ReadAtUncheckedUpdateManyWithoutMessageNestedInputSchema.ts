import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReadAtCreateWithoutMessageInputSchema } from './ReadAtCreateWithoutMessageInputSchema';
import { ReadAtUncheckedCreateWithoutMessageInputSchema } from './ReadAtUncheckedCreateWithoutMessageInputSchema';
import { ReadAtCreateOrConnectWithoutMessageInputSchema } from './ReadAtCreateOrConnectWithoutMessageInputSchema';
import { ReadAtUpsertWithWhereUniqueWithoutMessageInputSchema } from './ReadAtUpsertWithWhereUniqueWithoutMessageInputSchema';
import { ReadAtCreateManyMessageInputEnvelopeSchema } from './ReadAtCreateManyMessageInputEnvelopeSchema';
import { ReadAtWhereUniqueInputSchema } from './ReadAtWhereUniqueInputSchema';
import { ReadAtUpdateWithWhereUniqueWithoutMessageInputSchema } from './ReadAtUpdateWithWhereUniqueWithoutMessageInputSchema';
import { ReadAtUpdateManyWithWhereWithoutMessageInputSchema } from './ReadAtUpdateManyWithWhereWithoutMessageInputSchema';
import { ReadAtScalarWhereInputSchema } from './ReadAtScalarWhereInputSchema';

export const ReadAtUncheckedUpdateManyWithoutMessageNestedInputSchema: z.ZodType<Prisma.ReadAtUncheckedUpdateManyWithoutMessageNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReadAtCreateWithoutMessageInputSchema),z.lazy(() => ReadAtCreateWithoutMessageInputSchema).array(),z.lazy(() => ReadAtUncheckedCreateWithoutMessageInputSchema),z.lazy(() => ReadAtUncheckedCreateWithoutMessageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReadAtCreateOrConnectWithoutMessageInputSchema),z.lazy(() => ReadAtCreateOrConnectWithoutMessageInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReadAtUpsertWithWhereUniqueWithoutMessageInputSchema),z.lazy(() => ReadAtUpsertWithWhereUniqueWithoutMessageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReadAtCreateManyMessageInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReadAtWhereUniqueInputSchema),z.lazy(() => ReadAtWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReadAtWhereUniqueInputSchema),z.lazy(() => ReadAtWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReadAtWhereUniqueInputSchema),z.lazy(() => ReadAtWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReadAtWhereUniqueInputSchema),z.lazy(() => ReadAtWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReadAtUpdateWithWhereUniqueWithoutMessageInputSchema),z.lazy(() => ReadAtUpdateWithWhereUniqueWithoutMessageInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReadAtUpdateManyWithWhereWithoutMessageInputSchema),z.lazy(() => ReadAtUpdateManyWithWhereWithoutMessageInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReadAtScalarWhereInputSchema),z.lazy(() => ReadAtScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ReadAtUncheckedUpdateManyWithoutMessageNestedInputSchema;
