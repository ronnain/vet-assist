import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserUpdateWithoutFirstTimeReadMessagesInputSchema } from './UserUpdateWithoutFirstTimeReadMessagesInputSchema';
import { UserUncheckedUpdateWithoutFirstTimeReadMessagesInputSchema } from './UserUncheckedUpdateWithoutFirstTimeReadMessagesInputSchema';
import { UserCreateWithoutFirstTimeReadMessagesInputSchema } from './UserCreateWithoutFirstTimeReadMessagesInputSchema';
import { UserUncheckedCreateWithoutFirstTimeReadMessagesInputSchema } from './UserUncheckedCreateWithoutFirstTimeReadMessagesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutFirstTimeReadMessagesInputSchema: z.ZodType<Prisma.UserUpsertWithoutFirstTimeReadMessagesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutFirstTimeReadMessagesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutFirstTimeReadMessagesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutFirstTimeReadMessagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutFirstTimeReadMessagesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutFirstTimeReadMessagesInputSchema;
