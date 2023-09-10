import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';
import { MessageCreateNestedManyWithoutAuthorInputSchema } from './MessageCreateNestedManyWithoutAuthorInputSchema';
import { ReadAtCreateNestedManyWithoutUserInputSchema } from './ReadAtCreateNestedManyWithoutUserInputSchema';
import { ConversationCreateNestedManyWithoutUsersInputSchema } from './ConversationCreateNestedManyWithoutUsersInputSchema';
import { PetCreateNestedManyWithoutOwnerInputSchema } from './PetCreateNestedManyWithoutOwnerInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  role: z.lazy(() => UserRoleEnumSchema).optional(),
  authorMessages: z.lazy(() => MessageCreateNestedManyWithoutAuthorInputSchema).optional(),
  firstTimeReadMessages: z.lazy(() => ReadAtCreateNestedManyWithoutUserInputSchema).optional(),
  conversations: z.lazy(() => ConversationCreateNestedManyWithoutUsersInputSchema).optional(),
  pets: z.lazy(() => PetCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export default UserCreateInputSchema;
