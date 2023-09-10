import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutPetsInputSchema } from './UserCreateWithoutPetsInputSchema';
import { UserUncheckedCreateWithoutPetsInputSchema } from './UserUncheckedCreateWithoutPetsInputSchema';

export const UserCreateOrConnectWithoutPetsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPetsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutPetsInputSchema),z.lazy(() => UserUncheckedCreateWithoutPetsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutPetsInputSchema;
