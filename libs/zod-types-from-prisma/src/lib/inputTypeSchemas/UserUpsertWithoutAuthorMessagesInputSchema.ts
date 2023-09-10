import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserUpdateWithoutAuthorMessagesInputSchema } from './UserUpdateWithoutAuthorMessagesInputSchema';
import { UserUncheckedUpdateWithoutAuthorMessagesInputSchema } from './UserUncheckedUpdateWithoutAuthorMessagesInputSchema';
import { UserCreateWithoutAuthorMessagesInputSchema } from './UserCreateWithoutAuthorMessagesInputSchema';
import { UserUncheckedCreateWithoutAuthorMessagesInputSchema } from './UserUncheckedCreateWithoutAuthorMessagesInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutAuthorMessagesInputSchema: z.ZodType<Prisma.UserUpsertWithoutAuthorMessagesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAuthorMessagesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAuthorMessagesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAuthorMessagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutAuthorMessagesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutAuthorMessagesInputSchema;
