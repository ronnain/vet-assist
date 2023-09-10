import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConversationScalarWhereInputSchema } from './ConversationScalarWhereInputSchema';
import { ConversationUpdateManyMutationInputSchema } from './ConversationUpdateManyMutationInputSchema';
import { ConversationUncheckedUpdateManyWithoutUsersInputSchema } from './ConversationUncheckedUpdateManyWithoutUsersInputSchema';

export const ConversationUpdateManyWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.ConversationUpdateManyWithWhereWithoutUsersInput> = z.object({
  where: z.lazy(() => ConversationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ConversationUpdateManyMutationInputSchema),z.lazy(() => ConversationUncheckedUpdateManyWithoutUsersInputSchema) ]),
}).strict();

export default ConversationUpdateManyWithWhereWithoutUsersInputSchema;
