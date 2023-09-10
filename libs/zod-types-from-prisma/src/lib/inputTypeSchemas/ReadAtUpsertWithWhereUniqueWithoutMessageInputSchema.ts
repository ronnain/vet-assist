import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReadAtWhereUniqueInputSchema } from './ReadAtWhereUniqueInputSchema';
import { ReadAtUpdateWithoutMessageInputSchema } from './ReadAtUpdateWithoutMessageInputSchema';
import { ReadAtUncheckedUpdateWithoutMessageInputSchema } from './ReadAtUncheckedUpdateWithoutMessageInputSchema';
import { ReadAtCreateWithoutMessageInputSchema } from './ReadAtCreateWithoutMessageInputSchema';
import { ReadAtUncheckedCreateWithoutMessageInputSchema } from './ReadAtUncheckedCreateWithoutMessageInputSchema';

export const ReadAtUpsertWithWhereUniqueWithoutMessageInputSchema: z.ZodType<Prisma.ReadAtUpsertWithWhereUniqueWithoutMessageInput> = z.object({
  where: z.lazy(() => ReadAtWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReadAtUpdateWithoutMessageInputSchema),z.lazy(() => ReadAtUncheckedUpdateWithoutMessageInputSchema) ]),
  create: z.union([ z.lazy(() => ReadAtCreateWithoutMessageInputSchema),z.lazy(() => ReadAtUncheckedCreateWithoutMessageInputSchema) ]),
}).strict();

export default ReadAtUpsertWithWhereUniqueWithoutMessageInputSchema;
