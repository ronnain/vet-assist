import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConversationWhereUniqueInputSchema } from './ConversationWhereUniqueInputSchema';
import { ConversationCreateWithoutUsersInputSchema } from './ConversationCreateWithoutUsersInputSchema';
import { ConversationUncheckedCreateWithoutUsersInputSchema } from './ConversationUncheckedCreateWithoutUsersInputSchema';

export const ConversationCreateOrConnectWithoutUsersInputSchema: z.ZodType<Prisma.ConversationCreateOrConnectWithoutUsersInput> = z.object({
  where: z.lazy(() => ConversationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ConversationCreateWithoutUsersInputSchema),z.lazy(() => ConversationUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export default ConversationCreateOrConnectWithoutUsersInputSchema;
