import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateWithoutConversationsInputSchema } from './UserUpdateWithoutConversationsInputSchema';
import { UserUncheckedUpdateWithoutConversationsInputSchema } from './UserUncheckedUpdateWithoutConversationsInputSchema';

export const UserUpdateWithWhereUniqueWithoutConversationsInputSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutConversationsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserUpdateWithoutConversationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutConversationsInputSchema) ]),
}).strict();

export default UserUpdateWithWhereUniqueWithoutConversationsInputSchema;
