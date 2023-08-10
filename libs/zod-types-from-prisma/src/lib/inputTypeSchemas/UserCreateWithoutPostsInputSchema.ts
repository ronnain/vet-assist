import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const UserCreateWithoutPostsInputSchema: z.ZodType<Prisma.UserCreateWithoutPostsInput> = z.object({
  email: z.string(),
  name: z.string().optional().nullable()
}).strict();

export default UserCreateWithoutPostsInputSchema;
