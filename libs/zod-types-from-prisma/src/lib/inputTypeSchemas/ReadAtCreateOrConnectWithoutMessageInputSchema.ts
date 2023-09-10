import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReadAtWhereUniqueInputSchema } from './ReadAtWhereUniqueInputSchema';
import { ReadAtCreateWithoutMessageInputSchema } from './ReadAtCreateWithoutMessageInputSchema';
import { ReadAtUncheckedCreateWithoutMessageInputSchema } from './ReadAtUncheckedCreateWithoutMessageInputSchema';

export const ReadAtCreateOrConnectWithoutMessageInputSchema: z.ZodType<Prisma.ReadAtCreateOrConnectWithoutMessageInput> = z.object({
  where: z.lazy(() => ReadAtWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReadAtCreateWithoutMessageInputSchema),z.lazy(() => ReadAtUncheckedCreateWithoutMessageInputSchema) ]),
}).strict();

export default ReadAtCreateOrConnectWithoutMessageInputSchema;
