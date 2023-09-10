import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageUpdateWithoutRecipientsFirstTimeReadInputSchema } from './MessageUpdateWithoutRecipientsFirstTimeReadInputSchema';
import { MessageUncheckedUpdateWithoutRecipientsFirstTimeReadInputSchema } from './MessageUncheckedUpdateWithoutRecipientsFirstTimeReadInputSchema';
import { MessageCreateWithoutRecipientsFirstTimeReadInputSchema } from './MessageCreateWithoutRecipientsFirstTimeReadInputSchema';
import { MessageUncheckedCreateWithoutRecipientsFirstTimeReadInputSchema } from './MessageUncheckedCreateWithoutRecipientsFirstTimeReadInputSchema';
import { MessageWhereInputSchema } from './MessageWhereInputSchema';

export const MessageUpsertWithoutRecipientsFirstTimeReadInputSchema: z.ZodType<Prisma.MessageUpsertWithoutRecipientsFirstTimeReadInput> = z.object({
  update: z.union([ z.lazy(() => MessageUpdateWithoutRecipientsFirstTimeReadInputSchema),z.lazy(() => MessageUncheckedUpdateWithoutRecipientsFirstTimeReadInputSchema) ]),
  create: z.union([ z.lazy(() => MessageCreateWithoutRecipientsFirstTimeReadInputSchema),z.lazy(() => MessageUncheckedCreateWithoutRecipientsFirstTimeReadInputSchema) ]),
  where: z.lazy(() => MessageWhereInputSchema).optional()
}).strict();

export default MessageUpsertWithoutRecipientsFirstTimeReadInputSchema;
