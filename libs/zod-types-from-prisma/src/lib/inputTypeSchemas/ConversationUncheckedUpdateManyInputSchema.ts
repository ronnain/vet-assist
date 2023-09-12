import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ConversationTypeSchema } from './ConversationTypeSchema';
import { EnumConversationTypeFieldUpdateOperationsInputSchema } from './EnumConversationTypeFieldUpdateOperationsInputSchema';

export const ConversationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ConversationUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => ConversationTypeSchema),z.lazy(() => EnumConversationTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default ConversationUncheckedUpdateManyInputSchema;
