import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserScalarWhereInputSchema } from './UserScalarWhereInputSchema';
import { UserUpdateManyMutationInputSchema } from './UserUpdateManyMutationInputSchema';
import { UserUncheckedUpdateManyWithoutConversationsInputSchema } from './UserUncheckedUpdateManyWithoutConversationsInputSchema';

export const UserUpdateManyWithWhereWithoutConversationsInputSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutConversationsInput> = z.object({
  where: z.lazy(() => UserScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserUpdateManyMutationInputSchema),z.lazy(() => UserUncheckedUpdateManyWithoutConversationsInputSchema) ]),
}).strict();

export default UserUpdateManyWithWhereWithoutConversationsInputSchema;
