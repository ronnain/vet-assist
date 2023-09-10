import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutAuthorMessagesInputSchema } from './UserUpdateWithoutAuthorMessagesInputSchema';
import { UserUncheckedUpdateWithoutAuthorMessagesInputSchema } from './UserUncheckedUpdateWithoutAuthorMessagesInputSchema';

export const UserUpdateToOneWithWhereWithoutAuthorMessagesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAuthorMessagesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAuthorMessagesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAuthorMessagesInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutAuthorMessagesInputSchema;
