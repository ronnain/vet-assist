import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';
import { EnumUserRoleEnumFieldUpdateOperationsInputSchema } from './EnumUserRoleEnumFieldUpdateOperationsInputSchema';

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleEnumSchema),z.lazy(() => EnumUserRoleEnumFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default UserUpdateManyMutationInputSchema;
