import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';
import { EnumUserRoleEnumFieldUpdateOperationsInputSchema } from './EnumUserRoleEnumFieldUpdateOperationsInputSchema';
import { MessageUncheckedUpdateManyWithoutAuthorNestedInputSchema } from './MessageUncheckedUpdateManyWithoutAuthorNestedInputSchema';
import { ReadAtUncheckedUpdateManyWithoutUserNestedInputSchema } from './ReadAtUncheckedUpdateManyWithoutUserNestedInputSchema';
import { PetUncheckedUpdateManyWithoutOwnerNestedInputSchema } from './PetUncheckedUpdateManyWithoutOwnerNestedInputSchema';

export const UserUncheckedUpdateWithoutConversationsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutConversationsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleEnumSchema),z.lazy(() => EnumUserRoleEnumFieldUpdateOperationsInputSchema) ]).optional(),
  authorMessages: z.lazy(() => MessageUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  firstTimeReadMessages: z.lazy(() => ReadAtUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  pets: z.lazy(() => PetUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateWithoutConversationsInputSchema;
