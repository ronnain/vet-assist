import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageWhereUniqueInputSchema } from './MessageWhereUniqueInputSchema';
import { MessageUpdateWithoutAuthorInputSchema } from './MessageUpdateWithoutAuthorInputSchema';
import { MessageUncheckedUpdateWithoutAuthorInputSchema } from './MessageUncheckedUpdateWithoutAuthorInputSchema';

export const MessageUpdateWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.MessageUpdateWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => MessageUpdateWithoutAuthorInputSchema),z.lazy(() => MessageUncheckedUpdateWithoutAuthorInputSchema) ]),
}).strict();

export default MessageUpdateWithWhereUniqueWithoutAuthorInputSchema;
