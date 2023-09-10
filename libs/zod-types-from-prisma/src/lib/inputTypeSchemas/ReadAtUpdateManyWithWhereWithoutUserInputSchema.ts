import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReadAtScalarWhereInputSchema } from './ReadAtScalarWhereInputSchema';
import { ReadAtUpdateManyMutationInputSchema } from './ReadAtUpdateManyMutationInputSchema';
import { ReadAtUncheckedUpdateManyWithoutUserInputSchema } from './ReadAtUncheckedUpdateManyWithoutUserInputSchema';

export const ReadAtUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ReadAtUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ReadAtScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReadAtUpdateManyMutationInputSchema),z.lazy(() => ReadAtUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default ReadAtUpdateManyWithWhereWithoutUserInputSchema;
