import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  authorMessages: z.boolean().optional(),
  firstTimeReadMessages: z.boolean().optional(),
  conversations: z.boolean().optional(),
  pets: z.boolean().optional(),
}).strict();

export default UserCountOutputTypeSelectSchema;
