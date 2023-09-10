import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';
import { EnumUserRoleEnumFieldUpdateOperationsInputSchema } from './EnumUserRoleEnumFieldUpdateOperationsInputSchema';
import { MessageUpdateManyWithoutAuthorNestedInputSchema } from './MessageUpdateManyWithoutAuthorNestedInputSchema';
import { ReadAtUpdateManyWithoutUserNestedInputSchema } from './ReadAtUpdateManyWithoutUserNestedInputSchema';
import { ConversationUpdateManyWithoutUsersNestedInputSchema } from './ConversationUpdateManyWithoutUsersNestedInputSchema';

export const UserUpdateWithoutPetsInputSchema: z.ZodType<Prisma.UserUpdateWithoutPetsInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleEnumSchema),z.lazy(() => EnumUserRoleEnumFieldUpdateOperationsInputSchema) ]).optional(),
  authorMessages: z.lazy(() => MessageUpdateManyWithoutAuthorNestedInputSchema).optional(),
  firstTimeReadMessages: z.lazy(() => ReadAtUpdateManyWithoutUserNestedInputSchema).optional(),
  conversations: z.lazy(() => ConversationUpdateManyWithoutUsersNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutPetsInputSchema;
