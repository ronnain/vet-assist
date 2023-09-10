import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutPetsInputSchema } from './UserUpdateWithoutPetsInputSchema';
import { UserUncheckedUpdateWithoutPetsInputSchema } from './UserUncheckedUpdateWithoutPetsInputSchema';

export const UserUpdateToOneWithWhereWithoutPetsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPetsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutPetsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPetsInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutPetsInputSchema;
