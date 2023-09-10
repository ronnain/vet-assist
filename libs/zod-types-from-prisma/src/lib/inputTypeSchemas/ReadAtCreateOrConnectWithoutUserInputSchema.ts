import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReadAtWhereUniqueInputSchema } from './ReadAtWhereUniqueInputSchema';
import { ReadAtCreateWithoutUserInputSchema } from './ReadAtCreateWithoutUserInputSchema';
import { ReadAtUncheckedCreateWithoutUserInputSchema } from './ReadAtUncheckedCreateWithoutUserInputSchema';

export const ReadAtCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ReadAtCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ReadAtWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReadAtCreateWithoutUserInputSchema),z.lazy(() => ReadAtUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default ReadAtCreateOrConnectWithoutUserInputSchema;
