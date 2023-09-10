import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutFirstTimeReadMessagesInputSchema } from './UserCreateWithoutFirstTimeReadMessagesInputSchema';
import { UserUncheckedCreateWithoutFirstTimeReadMessagesInputSchema } from './UserUncheckedCreateWithoutFirstTimeReadMessagesInputSchema';
import { UserCreateOrConnectWithoutFirstTimeReadMessagesInputSchema } from './UserCreateOrConnectWithoutFirstTimeReadMessagesInputSchema';
import { UserUpsertWithoutFirstTimeReadMessagesInputSchema } from './UserUpsertWithoutFirstTimeReadMessagesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutFirstTimeReadMessagesInputSchema } from './UserUpdateToOneWithWhereWithoutFirstTimeReadMessagesInputSchema';
import { UserUpdateWithoutFirstTimeReadMessagesInputSchema } from './UserUpdateWithoutFirstTimeReadMessagesInputSchema';
import { UserUncheckedUpdateWithoutFirstTimeReadMessagesInputSchema } from './UserUncheckedUpdateWithoutFirstTimeReadMessagesInputSchema';

export const UserUpdateOneRequiredWithoutFirstTimeReadMessagesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFirstTimeReadMessagesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutFirstTimeReadMessagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutFirstTimeReadMessagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFirstTimeReadMessagesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutFirstTimeReadMessagesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutFirstTimeReadMessagesInputSchema),z.lazy(() => UserUpdateWithoutFirstTimeReadMessagesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutFirstTimeReadMessagesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutFirstTimeReadMessagesNestedInputSchema;
