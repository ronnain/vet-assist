import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MessageUpdateOneRequiredWithoutRecipientsFirstTimeReadNestedInputSchema } from './MessageUpdateOneRequiredWithoutRecipientsFirstTimeReadNestedInputSchema';

export const ReadAtUpdateWithoutUserInputSchema: z.ZodType<Prisma.ReadAtUpdateWithoutUserInput> = z.object({
  readAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.lazy(() => MessageUpdateOneRequiredWithoutRecipientsFirstTimeReadNestedInputSchema).optional()
}).strict();

export default ReadAtUpdateWithoutUserInputSchema;
