import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutFirstTimeReadMessagesInputSchema } from './UserCreateNestedOneWithoutFirstTimeReadMessagesInputSchema';
import { MessageCreateNestedOneWithoutRecipientsFirstTimeReadInputSchema } from './MessageCreateNestedOneWithoutRecipientsFirstTimeReadInputSchema';

export const ReadAtCreateInputSchema: z.ZodType<Prisma.ReadAtCreateInput> = z.object({
  readAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutFirstTimeReadMessagesInputSchema),
  message: z.lazy(() => MessageCreateNestedOneWithoutRecipientsFirstTimeReadInputSchema)
}).strict();

export default ReadAtCreateInputSchema;
