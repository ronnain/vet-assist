import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageCreateWithoutRecipientsFirstTimeReadInputSchema } from './MessageCreateWithoutRecipientsFirstTimeReadInputSchema';
import { MessageUncheckedCreateWithoutRecipientsFirstTimeReadInputSchema } from './MessageUncheckedCreateWithoutRecipientsFirstTimeReadInputSchema';
import { MessageCreateOrConnectWithoutRecipientsFirstTimeReadInputSchema } from './MessageCreateOrConnectWithoutRecipientsFirstTimeReadInputSchema';
import { MessageUpsertWithoutRecipientsFirstTimeReadInputSchema } from './MessageUpsertWithoutRecipientsFirstTimeReadInputSchema';
import { MessageWhereUniqueInputSchema } from './MessageWhereUniqueInputSchema';
import { MessageUpdateToOneWithWhereWithoutRecipientsFirstTimeReadInputSchema } from './MessageUpdateToOneWithWhereWithoutRecipientsFirstTimeReadInputSchema';
import { MessageUpdateWithoutRecipientsFirstTimeReadInputSchema } from './MessageUpdateWithoutRecipientsFirstTimeReadInputSchema';
import { MessageUncheckedUpdateWithoutRecipientsFirstTimeReadInputSchema } from './MessageUncheckedUpdateWithoutRecipientsFirstTimeReadInputSchema';

export const MessageUpdateOneRequiredWithoutRecipientsFirstTimeReadNestedInputSchema: z.ZodType<Prisma.MessageUpdateOneRequiredWithoutRecipientsFirstTimeReadNestedInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutRecipientsFirstTimeReadInputSchema),z.lazy(() => MessageUncheckedCreateWithoutRecipientsFirstTimeReadInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MessageCreateOrConnectWithoutRecipientsFirstTimeReadInputSchema).optional(),
  upsert: z.lazy(() => MessageUpsertWithoutRecipientsFirstTimeReadInputSchema).optional(),
  connect: z.lazy(() => MessageWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MessageUpdateToOneWithWhereWithoutRecipientsFirstTimeReadInputSchema),z.lazy(() => MessageUpdateWithoutRecipientsFirstTimeReadInputSchema),z.lazy(() => MessageUncheckedUpdateWithoutRecipientsFirstTimeReadInputSchema) ]).optional(),
}).strict();

export default MessageUpdateOneRequiredWithoutRecipientsFirstTimeReadNestedInputSchema;
