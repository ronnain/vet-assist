import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReadAtScalarWhereInputSchema } from './ReadAtScalarWhereInputSchema';
import { ReadAtUpdateManyMutationInputSchema } from './ReadAtUpdateManyMutationInputSchema';
import { ReadAtUncheckedUpdateManyWithoutMessageInputSchema } from './ReadAtUncheckedUpdateManyWithoutMessageInputSchema';

export const ReadAtUpdateManyWithWhereWithoutMessageInputSchema: z.ZodType<Prisma.ReadAtUpdateManyWithWhereWithoutMessageInput> = z.object({
  where: z.lazy(() => ReadAtScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReadAtUpdateManyMutationInputSchema),z.lazy(() => ReadAtUncheckedUpdateManyWithoutMessageInputSchema) ]),
}).strict();

export default ReadAtUpdateManyWithWhereWithoutMessageInputSchema;
