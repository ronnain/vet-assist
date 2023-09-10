import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageCreateNestedOneWithoutRecipientsFirstTimeReadInputSchema } from './MessageCreateNestedOneWithoutRecipientsFirstTimeReadInputSchema';

export const ReadAtCreateWithoutUserInputSchema: z.ZodType<Prisma.ReadAtCreateWithoutUserInput> = z.object({
  readAt: z.coerce.date().optional(),
  message: z.lazy(() => MessageCreateNestedOneWithoutRecipientsFirstTimeReadInputSchema)
}).strict();

export default ReadAtCreateWithoutUserInputSchema;
