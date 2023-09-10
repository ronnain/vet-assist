import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConversationCreateWithoutMessagesInputSchema } from './ConversationCreateWithoutMessagesInputSchema';
import { ConversationUncheckedCreateWithoutMessagesInputSchema } from './ConversationUncheckedCreateWithoutMessagesInputSchema';
import { ConversationCreateOrConnectWithoutMessagesInputSchema } from './ConversationCreateOrConnectWithoutMessagesInputSchema';
import { ConversationUpsertWithoutMessagesInputSchema } from './ConversationUpsertWithoutMessagesInputSchema';
import { ConversationWhereInputSchema } from './ConversationWhereInputSchema';
import { ConversationWhereUniqueInputSchema } from './ConversationWhereUniqueInputSchema';
import { ConversationUpdateToOneWithWhereWithoutMessagesInputSchema } from './ConversationUpdateToOneWithWhereWithoutMessagesInputSchema';
import { ConversationUpdateWithoutMessagesInputSchema } from './ConversationUpdateWithoutMessagesInputSchema';
import { ConversationUncheckedUpdateWithoutMessagesInputSchema } from './ConversationUncheckedUpdateWithoutMessagesInputSchema';

export const ConversationUpdateOneWithoutMessagesNestedInputSchema: z.ZodType<Prisma.ConversationUpdateOneWithoutMessagesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ConversationCreateWithoutMessagesInputSchema),z.lazy(() => ConversationUncheckedCreateWithoutMessagesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ConversationCreateOrConnectWithoutMessagesInputSchema).optional(),
  upsert: z.lazy(() => ConversationUpsertWithoutMessagesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ConversationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ConversationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ConversationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ConversationUpdateToOneWithWhereWithoutMessagesInputSchema),z.lazy(() => ConversationUpdateWithoutMessagesInputSchema),z.lazy(() => ConversationUncheckedUpdateWithoutMessagesInputSchema) ]).optional(),
}).strict();

export default ConversationUpdateOneWithoutMessagesNestedInputSchema;
