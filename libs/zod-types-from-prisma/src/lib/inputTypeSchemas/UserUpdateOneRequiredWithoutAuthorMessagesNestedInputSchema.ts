import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateWithoutAuthorMessagesInputSchema } from './UserCreateWithoutAuthorMessagesInputSchema';
import { UserUncheckedCreateWithoutAuthorMessagesInputSchema } from './UserUncheckedCreateWithoutAuthorMessagesInputSchema';
import { UserCreateOrConnectWithoutAuthorMessagesInputSchema } from './UserCreateOrConnectWithoutAuthorMessagesInputSchema';
import { UserUpsertWithoutAuthorMessagesInputSchema } from './UserUpsertWithoutAuthorMessagesInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutAuthorMessagesInputSchema } from './UserUpdateToOneWithWhereWithoutAuthorMessagesInputSchema';
import { UserUpdateWithoutAuthorMessagesInputSchema } from './UserUpdateWithoutAuthorMessagesInputSchema';
import { UserUncheckedUpdateWithoutAuthorMessagesInputSchema } from './UserUncheckedUpdateWithoutAuthorMessagesInputSchema';

export const UserUpdateOneRequiredWithoutAuthorMessagesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAuthorMessagesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAuthorMessagesInputSchema),z.lazy(() => UserUncheckedCreateWithoutAuthorMessagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAuthorMessagesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAuthorMessagesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAuthorMessagesInputSchema),z.lazy(() => UserUpdateWithoutAuthorMessagesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAuthorMessagesInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutAuthorMessagesNestedInputSchema;
