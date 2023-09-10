import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithoutConversationsInputSchema } from './UserUpdateWithoutConversationsInputSchema';
import { UserUncheckedUpdateWithoutConversationsInputSchema } from './UserUncheckedUpdateWithoutConversationsInputSchema';
import { UserCreateWithoutConversationsInputSchema } from './UserCreateWithoutConversationsInputSchema';
import { UserUncheckedCreateWithoutConversationsInputSchema } from './UserUncheckedCreateWithoutConversationsInputSchema';

export const UserUpsertWithWhereUniqueWithoutConversationsInputSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutConversationsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserUpdateWithoutConversationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutConversationsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutConversationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutConversationsInputSchema) ]),
}).strict();

export default UserUpsertWithWhereUniqueWithoutConversationsInputSchema;
