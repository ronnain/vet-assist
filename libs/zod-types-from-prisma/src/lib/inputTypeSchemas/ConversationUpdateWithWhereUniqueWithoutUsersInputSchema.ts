import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConversationWhereUniqueInputSchema } from './ConversationWhereUniqueInputSchema';
import { ConversationUpdateWithoutUsersInputSchema } from './ConversationUpdateWithoutUsersInputSchema';
import { ConversationUncheckedUpdateWithoutUsersInputSchema } from './ConversationUncheckedUpdateWithoutUsersInputSchema';

export const ConversationUpdateWithWhereUniqueWithoutUsersInputSchema: z.ZodType<Prisma.ConversationUpdateWithWhereUniqueWithoutUsersInput> = z.object({
  where: z.lazy(() => ConversationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ConversationUpdateWithoutUsersInputSchema),z.lazy(() => ConversationUncheckedUpdateWithoutUsersInputSchema) ]),
}).strict();

export default ConversationUpdateWithWhereUniqueWithoutUsersInputSchema;
