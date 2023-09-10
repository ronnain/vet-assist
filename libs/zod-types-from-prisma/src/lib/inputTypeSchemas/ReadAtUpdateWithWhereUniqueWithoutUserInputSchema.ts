import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReadAtWhereUniqueInputSchema } from './ReadAtWhereUniqueInputSchema';
import { ReadAtUpdateWithoutUserInputSchema } from './ReadAtUpdateWithoutUserInputSchema';
import { ReadAtUncheckedUpdateWithoutUserInputSchema } from './ReadAtUncheckedUpdateWithoutUserInputSchema';

export const ReadAtUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ReadAtUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ReadAtWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReadAtUpdateWithoutUserInputSchema),z.lazy(() => ReadAtUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default ReadAtUpdateWithWhereUniqueWithoutUserInputSchema;
