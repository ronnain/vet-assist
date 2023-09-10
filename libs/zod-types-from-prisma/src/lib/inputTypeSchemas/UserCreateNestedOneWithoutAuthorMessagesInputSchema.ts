import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutAuthorMessagesInputSchema } from './UserCreateWithoutAuthorMessagesInputSchema';
import { UserUncheckedCreateWithoutAuthorMessagesInputSchema } from './UserUncheckedCreateWithoutAuthorMessagesInputSchema';
import { UserCreateOrConnectWithoutAuthorMessagesInputSchema } from './UserCreateOrConnectWithoutAuthorMessagesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutAuthorMessagesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAuthorMessagesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAuthorMessagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutAuthorMessagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAuthorMessagesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutAuthorMessagesInputSchema;
