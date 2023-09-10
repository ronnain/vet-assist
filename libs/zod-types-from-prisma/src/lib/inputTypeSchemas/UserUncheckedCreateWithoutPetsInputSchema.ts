import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';
import { MessageUncheckedCreateNestedManyWithoutAuthorInputSchema } from './MessageUncheckedCreateNestedManyWithoutAuthorInputSchema';
import { ReadAtUncheckedCreateNestedManyWithoutUserInputSchema } from './ReadAtUncheckedCreateNestedManyWithoutUserInputSchema';
import { ConversationUncheckedCreateNestedManyWithoutUsersInputSchema } from './ConversationUncheckedCreateNestedManyWithoutUsersInputSchema';

export const UserUncheckedCreateWithoutPetsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPetsInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  role: z.lazy(() => UserRoleEnumSchema).optional(),
  authorMessages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  firstTimeReadMessages: z.lazy(() => ReadAtUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  conversations: z.lazy(() => ConversationUncheckedCreateNestedManyWithoutUsersInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutPetsInputSchema;
