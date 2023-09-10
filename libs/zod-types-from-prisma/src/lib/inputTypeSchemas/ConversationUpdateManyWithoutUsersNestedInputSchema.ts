import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConversationCreateWithoutUsersInputSchema } from './ConversationCreateWithoutUsersInputSchema';
import { ConversationUncheckedCreateWithoutUsersInputSchema } from './ConversationUncheckedCreateWithoutUsersInputSchema';
import { ConversationCreateOrConnectWithoutUsersInputSchema } from './ConversationCreateOrConnectWithoutUsersInputSchema';
import { ConversationUpsertWithWhereUniqueWithoutUsersInputSchema } from './ConversationUpsertWithWhereUniqueWithoutUsersInputSchema';
import { ConversationWhereUniqueInputSchema } from './ConversationWhereUniqueInputSchema';
import { ConversationUpdateWithWhereUniqueWithoutUsersInputSchema } from './ConversationUpdateWithWhereUniqueWithoutUsersInputSchema';
import { ConversationUpdateManyWithWhereWithoutUsersInputSchema } from './ConversationUpdateManyWithWhereWithoutUsersInputSchema';
import { ConversationScalarWhereInputSchema } from './ConversationScalarWhereInputSchema';

export const ConversationUpdateManyWithoutUsersNestedInputSchema: z.ZodType<Prisma.ConversationUpdateManyWithoutUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => ConversationCreateWithoutUsersInputSchema),z.lazy(() => ConversationCreateWithoutUsersInputSchema).array(),z.lazy(() => ConversationUncheckedCreateWithoutUsersInputSchema),z.lazy(() => ConversationUncheckedCreateWithoutUsersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConversationCreateOrConnectWithoutUsersInputSchema),z.lazy(() => ConversationCreateOrConnectWithoutUsersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ConversationUpsertWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => ConversationUpsertWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ConversationWhereUniqueInputSchema),z.lazy(() => ConversationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ConversationWhereUniqueInputSchema),z.lazy(() => ConversationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ConversationWhereUniqueInputSchema),z.lazy(() => ConversationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ConversationWhereUniqueInputSchema),z.lazy(() => ConversationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ConversationUpdateWithWhereUniqueWithoutUsersInputSchema),z.lazy(() => ConversationUpdateWithWhereUniqueWithoutUsersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ConversationUpdateManyWithWhereWithoutUsersInputSchema),z.lazy(() => ConversationUpdateManyWithWhereWithoutUsersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ConversationScalarWhereInputSchema),z.lazy(() => ConversationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ConversationUpdateManyWithoutUsersNestedInputSchema;
