import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutAuthorMessagesInputSchema } from './UserCreateWithoutAuthorMessagesInputSchema';
import { UserUncheckedCreateWithoutAuthorMessagesInputSchema } from './UserUncheckedCreateWithoutAuthorMessagesInputSchema';

export const UserCreateOrConnectWithoutAuthorMessagesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAuthorMessagesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAuthorMessagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutAuthorMessagesInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutAuthorMessagesInputSchema;
