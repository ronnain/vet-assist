import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutFirstTimeReadMessagesInputSchema } from './UserCreateWithoutFirstTimeReadMessagesInputSchema';
import { UserUncheckedCreateWithoutFirstTimeReadMessagesInputSchema } from './UserUncheckedCreateWithoutFirstTimeReadMessagesInputSchema';

export const UserCreateOrConnectWithoutFirstTimeReadMessagesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutFirstTimeReadMessagesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutFirstTimeReadMessagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutFirstTimeReadMessagesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutFirstTimeReadMessagesInputSchema;
