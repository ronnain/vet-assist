import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';
import { EnumUserRoleEnumFieldUpdateOperationsInputSchema } from './EnumUserRoleEnumFieldUpdateOperationsInputSchema';
import { MessageUpdateManyWithoutAuthorNestedInputSchema } from './MessageUpdateManyWithoutAuthorNestedInputSchema';
import { ReadAtUpdateManyWithoutUserNestedInputSchema } from './ReadAtUpdateManyWithoutUserNestedInputSchema';
import { PetUpdateManyWithoutOwnerNestedInputSchema } from './PetUpdateManyWithoutOwnerNestedInputSchema';

export const UserUpdateWithoutConversationsInputSchema: z.ZodType<Prisma.UserUpdateWithoutConversationsInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleEnumSchema),z.lazy(() => EnumUserRoleEnumFieldUpdateOperationsInputSchema) ]).optional(),
  authorMessages: z.lazy(() => MessageUpdateManyWithoutAuthorNestedInputSchema).optional(),
  firstTimeReadMessages: z.lazy(() => ReadAtUpdateManyWithoutUserNestedInputSchema).optional(),
  pets: z.lazy(() => PetUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutConversationsInputSchema;
