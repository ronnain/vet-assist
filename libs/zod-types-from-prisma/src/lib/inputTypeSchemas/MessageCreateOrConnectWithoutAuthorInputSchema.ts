import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageWhereUniqueInputSchema } from './MessageWhereUniqueInputSchema';
import { MessageCreateWithoutAuthorInputSchema } from './MessageCreateWithoutAuthorInputSchema';
import { MessageUncheckedCreateWithoutAuthorInputSchema } from './MessageUncheckedCreateWithoutAuthorInputSchema';

export const MessageCreateOrConnectWithoutAuthorInputSchema: z.ZodType<Prisma.MessageCreateOrConnectWithoutAuthorInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MessageCreateWithoutAuthorInputSchema),z.lazy(() => MessageUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export default MessageCreateOrConnectWithoutAuthorInputSchema;
