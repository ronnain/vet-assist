import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MessageUpdateManyWithoutConversationNestedInputSchema } from './MessageUpdateManyWithoutConversationNestedInputSchema';

export const ConversationUpdateWithoutUsersInputSchema: z.ZodType<Prisma.ConversationUpdateWithoutUsersInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  messages: z.lazy(() => MessageUpdateManyWithoutConversationNestedInputSchema).optional()
}).strict();

export default ConversationUpdateWithoutUsersInputSchema;
