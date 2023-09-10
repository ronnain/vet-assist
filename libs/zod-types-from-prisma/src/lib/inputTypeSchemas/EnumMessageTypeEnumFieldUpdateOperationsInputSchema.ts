import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageTypeEnumSchema } from './MessageTypeEnumSchema';

export const EnumMessageTypeEnumFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumMessageTypeEnumFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => MessageTypeEnumSchema).optional()
}).strict();

export default EnumMessageTypeEnumFieldUpdateOperationsInputSchema;
