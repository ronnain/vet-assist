import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';
import { MessageCreateNestedManyWithoutAuthorInputSchema } from './MessageCreateNestedManyWithoutAuthorInputSchema';
import { ReadAtCreateNestedManyWithoutUserInputSchema } from './ReadAtCreateNestedManyWithoutUserInputSchema';
import { PetCreateNestedManyWithoutOwnerInputSchema } from './PetCreateNestedManyWithoutOwnerInputSchema';

export const UserCreateWithoutConversationsInputSchema: z.ZodType<Prisma.UserCreateWithoutConversationsInput> = z.object({
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  role: z.lazy(() => UserRoleEnumSchema).optional(),
  authorMessages: z.lazy(() => MessageCreateNestedManyWithoutAuthorInputSchema).optional(),
  firstTimeReadMessages: z.lazy(() => ReadAtCreateNestedManyWithoutUserInputSchema).optional(),
  pets: z.lazy(() => PetCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export default UserCreateWithoutConversationsInputSchema;
