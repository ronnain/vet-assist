import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutConversationsInputSchema } from './UserCreateWithoutConversationsInputSchema';
import { UserUncheckedCreateWithoutConversationsInputSchema } from './UserUncheckedCreateWithoutConversationsInputSchema';
import { UserCreateOrConnectWithoutConversationsInputSchema } from './UserCreateOrConnectWithoutConversationsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedManyWithoutConversationsInputSchema: z.ZodType<Prisma.UserCreateNestedManyWithoutConversationsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutConversationsInputSchema),z.lazy(() => UserCreateWithoutConversationsInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutConversationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutConversationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutConversationsInputSchema),z.lazy(() => UserCreateOrConnectWithoutConversationsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default UserCreateNestedManyWithoutConversationsInputSchema;
