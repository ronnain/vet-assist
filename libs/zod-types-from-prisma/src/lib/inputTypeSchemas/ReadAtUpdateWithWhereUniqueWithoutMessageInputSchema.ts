import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReadAtWhereUniqueInputSchema } from './ReadAtWhereUniqueInputSchema';
import { ReadAtUpdateWithoutMessageInputSchema } from './ReadAtUpdateWithoutMessageInputSchema';
import { ReadAtUncheckedUpdateWithoutMessageInputSchema } from './ReadAtUncheckedUpdateWithoutMessageInputSchema';

export const ReadAtUpdateWithWhereUniqueWithoutMessageInputSchema: z.ZodType<Prisma.ReadAtUpdateWithWhereUniqueWithoutMessageInput> = z.object({
  where: z.lazy(() => ReadAtWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReadAtUpdateWithoutMessageInputSchema),z.lazy(() => ReadAtUncheckedUpdateWithoutMessageInputSchema) ]),
}).strict();

export default ReadAtUpdateWithWhereUniqueWithoutMessageInputSchema;
