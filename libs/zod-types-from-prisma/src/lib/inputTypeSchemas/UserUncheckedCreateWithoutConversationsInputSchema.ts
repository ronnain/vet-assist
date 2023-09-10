import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';
import { MessageUncheckedCreateNestedManyWithoutAuthorInputSchema } from './MessageUncheckedCreateNestedManyWithoutAuthorInputSchema';
import { ReadAtUncheckedCreateNestedManyWithoutUserInputSchema } from './ReadAtUncheckedCreateNestedManyWithoutUserInputSchema';
import { PetUncheckedCreateNestedManyWithoutOwnerInputSchema } from './PetUncheckedCreateNestedManyWithoutOwnerInputSchema';

export const UserUncheckedCreateWithoutConversationsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutConversationsInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  role: z.lazy(() => UserRoleEnumSchema).optional(),
  authorMessages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  firstTimeReadMessages: z.lazy(() => ReadAtUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  pets: z.lazy(() => PetUncheckedCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutConversationsInputSchema;
