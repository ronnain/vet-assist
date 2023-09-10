import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserUpdateWithoutPetsInputSchema } from './UserUpdateWithoutPetsInputSchema';
import { UserUncheckedUpdateWithoutPetsInputSchema } from './UserUncheckedUpdateWithoutPetsInputSchema';
import { UserCreateWithoutPetsInputSchema } from './UserCreateWithoutPetsInputSchema';
import { UserUncheckedCreateWithoutPetsInputSchema } from './UserUncheckedCreateWithoutPetsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutPetsInputSchema: z.ZodType<Prisma.UserUpsertWithoutPetsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutPetsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPetsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutPetsInputSchema),z.lazy(() => UserUncheckedCreateWithoutPetsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutPetsInputSchema;
