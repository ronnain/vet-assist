import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateNestedOneWithoutFirstTimeReadMessagesInputSchema } from './UserCreateNestedOneWithoutFirstTimeReadMessagesInputSchema';

export const ReadAtCreateWithoutMessageInputSchema: z.ZodType<Prisma.ReadAtCreateWithoutMessageInput> = z.object({
  readAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutFirstTimeReadMessagesInputSchema)
}).strict();

export default ReadAtCreateWithoutMessageInputSchema;
