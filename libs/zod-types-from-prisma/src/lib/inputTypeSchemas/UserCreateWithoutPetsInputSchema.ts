import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';
import { MessageCreateNestedManyWithoutAuthorInputSchema } from './MessageCreateNestedManyWithoutAuthorInputSchema';
import { ReadAtCreateNestedManyWithoutUserInputSchema } from './ReadAtCreateNestedManyWithoutUserInputSchema';
import { ConversationCreateNestedManyWithoutUsersInputSchema } from './ConversationCreateNestedManyWithoutUsersInputSchema';

export const UserCreateWithoutPetsInputSchema: z.ZodType<Prisma.UserCreateWithoutPetsInput> = z.object({
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  role: z.lazy(() => UserRoleEnumSchema).optional(),
  authorMessages: z.lazy(() => MessageCreateNestedManyWithoutAuthorInputSchema).optional(),
  firstTimeReadMessages: z.lazy(() => ReadAtCreateNestedManyWithoutUserInputSchema).optional(),
  conversations: z.lazy(() => ConversationCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export default UserCreateWithoutPetsInputSchema;
