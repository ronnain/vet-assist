import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReadAtWhereUniqueInputSchema } from './ReadAtWhereUniqueInputSchema';
import { ReadAtUpdateWithoutUserInputSchema } from './ReadAtUpdateWithoutUserInputSchema';
import { ReadAtUncheckedUpdateWithoutUserInputSchema } from './ReadAtUncheckedUpdateWithoutUserInputSchema';
import { ReadAtCreateWithoutUserInputSchema } from './ReadAtCreateWithoutUserInputSchema';
import { ReadAtUncheckedCreateWithoutUserInputSchema } from './ReadAtUncheckedCreateWithoutUserInputSchema';

export const ReadAtUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ReadAtUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ReadAtWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReadAtUpdateWithoutUserInputSchema),z.lazy(() => ReadAtUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ReadAtCreateWithoutUserInputSchema),z.lazy(() => ReadAtUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default ReadAtUpsertWithWhereUniqueWithoutUserInputSchema;
