import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';
import { ReadAtUncheckedCreateNestedManyWithoutUserInputSchema } from './ReadAtUncheckedCreateNestedManyWithoutUserInputSchema';
import { ConversationUncheckedCreateNestedManyWithoutUsersInputSchema } from './ConversationUncheckedCreateNestedManyWithoutUsersInputSchema';
import { PetUncheckedCreateNestedManyWithoutOwnerInputSchema } from './PetUncheckedCreateNestedManyWithoutOwnerInputSchema';

export const UserUncheckedCreateWithoutAuthorMessagesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAuthorMessagesInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  role: z.lazy(() => UserRoleEnumSchema).optional(),
  firstTimeReadMessages: z.lazy(() => ReadAtUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  conversations: z.lazy(() => ConversationUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  pets: z.lazy(() => PetUncheckedCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutAuthorMessagesInputSchema;
