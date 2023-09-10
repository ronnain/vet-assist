import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageWhereUniqueInputSchema } from './MessageWhereUniqueInputSchema';
import { MessageUpdateWithoutAuthorInputSchema } from './MessageUpdateWithoutAuthorInputSchema';
import { MessageUncheckedUpdateWithoutAuthorInputSchema } from './MessageUncheckedUpdateWithoutAuthorInputSchema';
import { MessageCreateWithoutAuthorInputSchema } from './MessageCreateWithoutAuthorInputSchema';
import { MessageUncheckedCreateWithoutAuthorInputSchema } from './MessageUncheckedCreateWithoutAuthorInputSchema';

export const MessageUpsertWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.MessageUpsertWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => MessageUpdateWithoutAuthorInputSchema),z.lazy(() => MessageUncheckedUpdateWithoutAuthorInputSchema) ]),
  create: z.union([ z.lazy(() => MessageCreateWithoutAuthorInputSchema),z.lazy(() => MessageUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export default MessageUpsertWithWhereUniqueWithoutAuthorInputSchema;
