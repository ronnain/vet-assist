import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';
import { EnumUserRoleEnumFieldUpdateOperationsInputSchema } from './EnumUserRoleEnumFieldUpdateOperationsInputSchema';
import { ReadAtUpdateManyWithoutUserNestedInputSchema } from './ReadAtUpdateManyWithoutUserNestedInputSchema';
import { ConversationUpdateManyWithoutUsersNestedInputSchema } from './ConversationUpdateManyWithoutUsersNestedInputSchema';
import { PetUpdateManyWithoutOwnerNestedInputSchema } from './PetUpdateManyWithoutOwnerNestedInputSchema';

export const UserUpdateWithoutAuthorMessagesInputSchema: z.ZodType<Prisma.UserUpdateWithoutAuthorMessagesInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleEnumSchema),z.lazy(() => EnumUserRoleEnumFieldUpdateOperationsInputSchema) ]).optional(),
  firstTimeReadMessages: z.lazy(() => ReadAtUpdateManyWithoutUserNestedInputSchema).optional(),
  conversations: z.lazy(() => ConversationUpdateManyWithoutUsersNestedInputSchema).optional(),
  pets: z.lazy(() => PetUpdateManyWithoutOwnerNestedInputSchema).optional()
}).strict();

export default UserUpdateWithoutAuthorMessagesInputSchema;
