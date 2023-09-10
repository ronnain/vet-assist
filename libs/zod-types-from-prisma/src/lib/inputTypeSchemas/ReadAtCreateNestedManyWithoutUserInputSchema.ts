import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReadAtCreateWithoutUserInputSchema } from './ReadAtCreateWithoutUserInputSchema';
import { ReadAtUncheckedCreateWithoutUserInputSchema } from './ReadAtUncheckedCreateWithoutUserInputSchema';
import { ReadAtCreateOrConnectWithoutUserInputSchema } from './ReadAtCreateOrConnectWithoutUserInputSchema';
import { ReadAtCreateManyUserInputEnvelopeSchema } from './ReadAtCreateManyUserInputEnvelopeSchema';
import { ReadAtWhereUniqueInputSchema } from './ReadAtWhereUniqueInputSchema';

export const ReadAtCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ReadAtCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ReadAtCreateWithoutUserInputSchema),z.lazy(() => ReadAtCreateWithoutUserInputSchema).array(),z.lazy(() => ReadAtUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReadAtUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReadAtCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReadAtCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReadAtCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReadAtWhereUniqueInputSchema),z.lazy(() => ReadAtWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ReadAtCreateNestedManyWithoutUserInputSchema;
