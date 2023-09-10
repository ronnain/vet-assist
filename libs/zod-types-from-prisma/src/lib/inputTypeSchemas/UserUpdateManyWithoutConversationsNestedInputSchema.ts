import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutConversationsInputSchema } from './UserCreateWithoutConversationsInputSchema';
import { UserUncheckedCreateWithoutConversationsInputSchema } from './UserUncheckedCreateWithoutConversationsInputSchema';
import { UserCreateOrConnectWithoutConversationsInputSchema } from './UserCreateOrConnectWithoutConversationsInputSchema';
import { UserUpsertWithWhereUniqueWithoutConversationsInputSchema } from './UserUpsertWithWhereUniqueWithoutConversationsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithWhereUniqueWithoutConversationsInputSchema } from './UserUpdateWithWhereUniqueWithoutConversationsInputSchema';
import { UserUpdateManyWithWhereWithoutConversationsInputSchema } from './UserUpdateManyWithWhereWithoutConversationsInputSchema';
import { UserScalarWhereInputSchema } from './UserScalarWhereInputSchema';

export const UserUpdateManyWithoutConversationsNestedInputSchema: z.ZodType<Prisma.UserUpdateManyWithoutConversationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutConversationsInputSchema),z.lazy(() => UserCreateWithoutConversationsInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutConversationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutConversationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutConversationsInputSchema),z.lazy(() => UserCreateOrConnectWithoutConversationsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserUpsertWithWhereUniqueWithoutConversationsInputSchema),z.lazy(() => UserUpsertWithWhereUniqueWithoutConversationsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithWhereUniqueWithoutConversationsInputSchema),z.lazy(() => UserUpdateWithWhereUniqueWithoutConversationsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserUpdateManyWithWhereWithoutConversationsInputSchema),z.lazy(() => UserUpdateManyWithWhereWithoutConversationsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default UserUpdateManyWithoutConversationsNestedInputSchema;
