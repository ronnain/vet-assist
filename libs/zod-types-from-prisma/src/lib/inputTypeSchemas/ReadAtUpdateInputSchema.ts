import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutFirstTimeReadMessagesNestedInputSchema } from './UserUpdateOneRequiredWithoutFirstTimeReadMessagesNestedInputSchema';
import { MessageUpdateOneRequiredWithoutRecipientsFirstTimeReadNestedInputSchema } from './MessageUpdateOneRequiredWithoutRecipientsFirstTimeReadNestedInputSchema';

export const ReadAtUpdateInputSchema: z.ZodType<Prisma.ReadAtUpdateInput> = z.object({
  readAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutFirstTimeReadMessagesNestedInputSchema).optional(),
  message: z.lazy(() => MessageUpdateOneRequiredWithoutRecipientsFirstTimeReadNestedInputSchema).optional()
}).strict();

export default ReadAtUpdateInputSchema;
