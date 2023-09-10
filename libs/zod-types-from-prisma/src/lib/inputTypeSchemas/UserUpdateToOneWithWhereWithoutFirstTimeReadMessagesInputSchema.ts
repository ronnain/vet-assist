import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutFirstTimeReadMessagesInputSchema } from './UserUpdateWithoutFirstTimeReadMessagesInputSchema';
import { UserUncheckedUpdateWithoutFirstTimeReadMessagesInputSchema } from './UserUncheckedUpdateWithoutFirstTimeReadMessagesInputSchema';

export const UserUpdateToOneWithWhereWithoutFirstTimeReadMessagesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFirstTimeReadMessagesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutFirstTimeReadMessagesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutFirstTimeReadMessagesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutFirstTimeReadMessagesInputSchema;
