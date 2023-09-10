import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReadAtCreateWithoutMessageInputSchema } from './ReadAtCreateWithoutMessageInputSchema';
import { ReadAtUncheckedCreateWithoutMessageInputSchema } from './ReadAtUncheckedCreateWithoutMessageInputSchema';
import { ReadAtCreateOrConnectWithoutMessageInputSchema } from './ReadAtCreateOrConnectWithoutMessageInputSchema';
import { ReadAtCreateManyMessageInputEnvelopeSchema } from './ReadAtCreateManyMessageInputEnvelopeSchema';
import { ReadAtWhereUniqueInputSchema } from './ReadAtWhereUniqueInputSchema';

export const ReadAtUncheckedCreateNestedManyWithoutMessageInputSchema: z.ZodType<Prisma.ReadAtUncheckedCreateNestedManyWithoutMessageInput> = z.object({
  create: z.union([ z.lazy(() => ReadAtCreateWithoutMessageInputSchema),z.lazy(() => ReadAtCreateWithoutMessageInputSchema).array(),z.lazy(() => ReadAtUncheckedCreateWithoutMessageInputSchema),z.lazy(() => ReadAtUncheckedCreateWithoutMessageInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReadAtCreateOrConnectWithoutMessageInputSchema),z.lazy(() => ReadAtCreateOrConnectWithoutMessageInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReadAtCreateManyMessageInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReadAtWhereUniqueInputSchema),z.lazy(() => ReadAtWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ReadAtUncheckedCreateNestedManyWithoutMessageInputSchema;
