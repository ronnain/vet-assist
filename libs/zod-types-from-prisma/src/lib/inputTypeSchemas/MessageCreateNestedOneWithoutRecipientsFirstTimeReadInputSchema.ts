import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageCreateWithoutRecipientsFirstTimeReadInputSchema } from './MessageCreateWithoutRecipientsFirstTimeReadInputSchema';
import { MessageUncheckedCreateWithoutRecipientsFirstTimeReadInputSchema } from './MessageUncheckedCreateWithoutRecipientsFirstTimeReadInputSchema';
import { MessageCreateOrConnectWithoutRecipientsFirstTimeReadInputSchema } from './MessageCreateOrConnectWithoutRecipientsFirstTimeReadInputSchema';
import { MessageWhereUniqueInputSchema } from './MessageWhereUniqueInputSchema';

export const MessageCreateNestedOneWithoutRecipientsFirstTimeReadInputSchema: z.ZodType<Prisma.MessageCreateNestedOneWithoutRecipientsFirstTimeReadInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutRecipientsFirstTimeReadInputSchema),z.lazy(() => MessageUncheckedCreateWithoutRecipientsFirstTimeReadInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MessageCreateOrConnectWithoutRecipientsFirstTimeReadInputSchema).optional(),
  connect: z.lazy(() => MessageWhereUniqueInputSchema).optional()
}).strict();

export default MessageCreateNestedOneWithoutRecipientsFirstTimeReadInputSchema;
