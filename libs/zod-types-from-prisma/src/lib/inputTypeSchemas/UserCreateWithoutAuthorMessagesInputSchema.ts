import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';
import { ReadAtCreateNestedManyWithoutUserInputSchema } from './ReadAtCreateNestedManyWithoutUserInputSchema';
import { ConversationCreateNestedManyWithoutUsersInputSchema } from './ConversationCreateNestedManyWithoutUsersInputSchema';
import { PetCreateNestedManyWithoutOwnerInputSchema } from './PetCreateNestedManyWithoutOwnerInputSchema';

export const UserCreateWithoutAuthorMessagesInputSchema: z.ZodType<Prisma.UserCreateWithoutAuthorMessagesInput> = z.object({
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  role: z.lazy(() => UserRoleEnumSchema).optional(),
  firstTimeReadMessages: z.lazy(() => ReadAtCreateNestedManyWithoutUserInputSchema).optional(),
  conversations: z.lazy(() => ConversationCreateNestedManyWithoutUsersInputSchema).optional(),
  pets: z.lazy(() => PetCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export default UserCreateWithoutAuthorMessagesInputSchema;
