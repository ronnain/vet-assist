import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const UserUncheckedCreateWithoutPostsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPostsInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();

export default UserUncheckedCreateWithoutPostsInputSchema;
