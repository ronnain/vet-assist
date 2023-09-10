import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageScalarWhereInputSchema } from './MessageScalarWhereInputSchema';
import { MessageUpdateManyMutationInputSchema } from './MessageUpdateManyMutationInputSchema';
import { MessageUncheckedUpdateManyWithoutAuthorInputSchema } from './MessageUncheckedUpdateManyWithoutAuthorInputSchema';

export const MessageUpdateManyWithWhereWithoutAuthorInputSchema: z.ZodType<Prisma.MessageUpdateManyWithWhereWithoutAuthorInput> = z.object({
  where: z.lazy(() => MessageScalarWhereInputSchema),
  data: z.union([ z.lazy(() => MessageUpdateManyMutationInputSchema),z.lazy(() => MessageUncheckedUpdateManyWithoutAuthorInputSchema) ]),
}).strict();

export default MessageUpdateManyWithWhereWithoutAuthorInputSchema;
