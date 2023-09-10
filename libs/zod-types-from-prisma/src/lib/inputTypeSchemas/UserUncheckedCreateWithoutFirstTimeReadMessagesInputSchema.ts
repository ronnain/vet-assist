import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';
import { MessageUncheckedCreateNestedManyWithoutAuthorInputSchema } from './MessageUncheckedCreateNestedManyWithoutAuthorInputSchema';
import { ConversationUncheckedCreateNestedManyWithoutUsersInputSchema } from './ConversationUncheckedCreateNestedManyWithoutUsersInputSchema';
import { PetUncheckedCreateNestedManyWithoutOwnerInputSchema } from './PetUncheckedCreateNestedManyWithoutOwnerInputSchema';

export const UserUncheckedCreateWithoutFirstTimeReadMessagesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutFirstTimeReadMessagesInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  role: z.lazy(() => UserRoleEnumSchema).optional(),
  authorMessages: z.lazy(() => MessageUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  conversations: z.lazy(() => ConversationUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
  pets: z.lazy(() => PetUncheckedCreateNestedManyWithoutOwnerInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutFirstTimeReadMessagesInputSchema;
