import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageWhereUniqueInputSchema } from './MessageWhereUniqueInputSchema';
import { MessageCreateWithoutRecipientsFirstTimeReadInputSchema } from './MessageCreateWithoutRecipientsFirstTimeReadInputSchema';
import { MessageUncheckedCreateWithoutRecipientsFirstTimeReadInputSchema } from './MessageUncheckedCreateWithoutRecipientsFirstTimeReadInputSchema';

export const MessageCreateOrConnectWithoutRecipientsFirstTimeReadInputSchema: z.ZodType<Prisma.MessageCreateOrConnectWithoutRecipientsFirstTimeReadInput> = z.object({
  where: z.lazy(() => MessageWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MessageCreateWithoutRecipientsFirstTimeReadInputSchema),z.lazy(() => MessageUncheckedCreateWithoutRecipientsFirstTimeReadInputSchema) ]),
}).strict();

export default MessageCreateOrConnectWithoutRecipientsFirstTimeReadInputSchema;
