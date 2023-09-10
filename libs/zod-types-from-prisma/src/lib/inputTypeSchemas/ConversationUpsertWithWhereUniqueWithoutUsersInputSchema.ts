import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConversationWhereUniqueInputSchema } from './ConversationWhereUniqueInputSchema';
import { ConversationUpdateWithoutUsersInputSchema } from './ConversationUpdateWithoutUsersInputSchema';
import { ConversationUncheckedUpdateWithoutUsersInputSchema } from './ConversationUncheckedUpdateWithoutUsersInputSchema';
import { ConversationCreateWithoutUsersInputSchema } from './ConversationCreateWithoutUsersInputSchema';
import { ConversationUncheckedCreateWithoutUsersInputSchema } from './ConversationUncheckedCreateWithoutUsersInputSchema';

export const ConversationUpsertWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.ConversationUpsertWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => ConversationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ConversationUpdateWithoutUsersInputSchema),z.lazy(() => ConversationUncheckedUpdateWithoutUsersInputSchema) ]),
  create: z.union([ z.lazy(() => ConversationCreateWithoutUsersInputSchema),z.lazy(() => ConversationUncheckedCreateWithoutUsersInputSchema) ]),
}).strict();

export default ConversationUpsertWithWhereUniqueWithoutUsersInputSchema;
