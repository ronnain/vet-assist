import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageWhereInputSchema } from './MessageWhereInputSchema';
import { MessageUpdateWithoutRecipientsFirstTimeReadInputSchema } from './MessageUpdateWithoutRecipientsFirstTimeReadInputSchema';
import { MessageUncheckedUpdateWithoutRecipientsFirstTimeReadInputSchema } from './MessageUncheckedUpdateWithoutRecipientsFirstTimeReadInputSchema';

export const MessageUpdateToOneWithWhereWithoutRecipientsFirstTimeReadInputSchema: z.ZodType<Prisma.MessageUpdateToOneWithWhereWithoutRecipientsFirstTimeReadInput> = z.object({
  where: z.lazy(() => MessageWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MessageUpdateWithoutRecipientsFirstTimeReadInputSchema),z.lazy(() => MessageUncheckedUpdateWithoutRecipientsFirstTimeReadInputSchema) ]),
}).strict();

export default MessageUpdateToOneWithWhereWithoutRecipientsFirstTimeReadInputSchema;
