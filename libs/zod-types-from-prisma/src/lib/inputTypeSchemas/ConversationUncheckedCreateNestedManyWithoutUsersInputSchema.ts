import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConversationCreateWithoutUsersInputSchema } from './ConversationCreateWithoutUsersInputSchema';
import { ConversationUncheckedCreateWithoutUsersInputSchema } from './ConversationUncheckedCreateWithoutUsersInputSchema';
import { ConversationCreateOrConnectWithoutUsersInputSchema } from './ConversationCreateOrConnectWithoutUsersInputSchema';
import { ConversationWhereUniqueInputSchema } from './ConversationWhereUniqueInputSchema';

export const ConversationUncheckedCreateNestedManyWithoutUsersInputSchema: z.ZodType<Prisma.ConversationUncheckedCreateNestedManyWithoutUsersInput> = z.object({
  create: z.union([ z.lazy(() => ConversationCreateWithoutUsersInputSchema),z.lazy(() => ConversationCreateWithoutUsersInputSchema).array(),z.lazy(() => ConversationUncheckedCreateWithoutUsersInputSchema),z.lazy(() => ConversationUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConversationCreateOrConnectWithoutUsersInputSchema),z.lazy(() => ConversationCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ConversationWhereUniqueInputSchema),z.lazy(() => ConversationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ConversationUncheckedCreateNestedManyWithoutUsersInputSchema;
