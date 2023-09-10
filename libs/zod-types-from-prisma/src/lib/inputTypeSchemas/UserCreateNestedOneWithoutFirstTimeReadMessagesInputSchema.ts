import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutFirstTimeReadMessagesInputSchema } from './UserCreateWithoutFirstTimeReadMessagesInputSchema';
import { UserUncheckedCreateWithoutFirstTimeReadMessagesInputSchema } from './UserUncheckedCreateWithoutFirstTimeReadMessagesInputSchema';
import { UserCreateOrConnectWithoutFirstTimeReadMessagesInputSchema } from './UserCreateOrConnectWithoutFirstTimeReadMessagesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutFirstTimeReadMessagesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutFirstTimeReadMessagesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutFirstTimeReadMessagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutFirstTimeReadMessagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFirstTimeReadMessagesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutFirstTimeReadMessagesInputSchema;
