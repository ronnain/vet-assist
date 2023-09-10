import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  role: z.lazy(() => UserRoleEnumSchema).optional()
}).strict();

export default UserCreateManyInputSchema;
