import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReadAtCreateWithoutUserInputSchema } from './ReadAtCreateWithoutUserInputSchema';
import { ReadAtUncheckedCreateWithoutUserInputSchema } from './ReadAtUncheckedCreateWithoutUserInputSchema';
import { ReadAtCreateOrConnectWithoutUserInputSchema } from './ReadAtCreateOrConnectWithoutUserInputSchema';
import { ReadAtUpsertWithWhereUniqueWithoutUserInputSchema } from './ReadAtUpsertWithWhereUniqueWithoutUserInputSchema';
import { ReadAtCreateManyUserInputEnvelopeSchema } from './ReadAtCreateManyUserInputEnvelopeSchema';
import { ReadAtWhereUniqueInputSchema } from './ReadAtWhereUniqueInputSchema';
import { ReadAtUpdateWithWhereUniqueWithoutUserInputSchema } from './ReadAtUpdateWithWhereUniqueWithoutUserInputSchema';
import { ReadAtUpdateManyWithWhereWithoutUserInputSchema } from './ReadAtUpdateManyWithWhereWithoutUserInputSchema';
import { ReadAtScalarWhereInputSchema } from './ReadAtScalarWhereInputSchema';

export const ReadAtUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ReadAtUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReadAtCreateWithoutUserInputSchema),z.lazy(() => ReadAtCreateWithoutUserInputSchema).array(),z.lazy(() => ReadAtUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReadAtUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReadAtCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReadAtCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReadAtUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReadAtUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReadAtCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReadAtWhereUniqueInputSchema),z.lazy(() => ReadAtWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReadAtWhereUniqueInputSchema),z.lazy(() => ReadAtWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReadAtWhereUniqueInputSchema),z.lazy(() => ReadAtWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReadAtWhereUniqueInputSchema),z.lazy(() => ReadAtWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReadAtUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReadAtUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReadAtUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ReadAtUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReadAtScalarWhereInputSchema),z.lazy(() => ReadAtScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ReadAtUpdateManyWithoutUserNestedInputSchema;
