import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutPetsInputSchema } from './UserCreateWithoutPetsInputSchema';
import { UserUncheckedCreateWithoutPetsInputSchema } from './UserUncheckedCreateWithoutPetsInputSchema';
import { UserCreateOrConnectWithoutPetsInputSchema } from './UserCreateOrConnectWithoutPetsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutPetsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPetsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPetsInputSchema),z.lazy(() => UserUncheckedCreateWithoutPetsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPetsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutPetsInputSchema;
