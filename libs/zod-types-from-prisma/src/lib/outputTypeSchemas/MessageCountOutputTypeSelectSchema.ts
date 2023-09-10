import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const MessageCountOutputTypeSelectSchema: z.ZodType<Prisma.MessageCountOutputTypeSelect> = z.object({
  recipientsFirstTimeRead: z.boolean().optional(),
}).strict();

export default MessageCountOutputTypeSelectSchema;
