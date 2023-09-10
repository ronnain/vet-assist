import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutPetsInputSchema } from './UserCreateWithoutPetsInputSchema';
import { UserUncheckedCreateWithoutPetsInputSchema } from './UserUncheckedCreateWithoutPetsInputSchema';
import { UserCreateOrConnectWithoutPetsInputSchema } from './UserCreateOrConnectWithoutPetsInputSchema';
import { UserUpsertWithoutPetsInputSchema } from './UserUpsertWithoutPetsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutPetsInputSchema } from './UserUpdateToOneWithWhereWithoutPetsInputSchema';
import { UserUpdateWithoutPetsInputSchema } from './UserUpdateWithoutPetsInputSchema';
import { UserUncheckedUpdateWithoutPetsInputSchema } from './UserUncheckedUpdateWithoutPetsInputSchema';

export const UserUpdateOneRequiredWithoutPetsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPetsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPetsInputSchema),z.lazy(() => UserUncheckedCreateWithoutPetsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPetsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPetsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutPetsInputSchema),z.lazy(() => UserUpdateWithoutPetsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPetsInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutPetsNestedInputSchema;
