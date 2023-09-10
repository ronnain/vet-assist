import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutFirstTimeReadMessagesNestedInputSchema } from './UserUpdateOneRequiredWithoutFirstTimeReadMessagesNestedInputSchema';

export const ReadAtUpdateWithoutMessageInputSchema: z.ZodType<Prisma.ReadAtUpdateWithoutMessageInput> = z.object({
  readAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutFirstTimeReadMessagesNestedInputSchema).optional()
}).strict();

export default ReadAtUpdateWithoutMessageInputSchema;
