import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageCreateWithoutAuthorInputSchema } from './MessageCreateWithoutAuthorInputSchema';
import { MessageUncheckedCreateWithoutAuthorInputSchema } from './MessageUncheckedCreateWithoutAuthorInputSchema';
import { MessageCreateOrConnectWithoutAuthorInputSchema } from './MessageCreateOrConnectWithoutAuthorInputSchema';
import { MessageUpsertWithWhereUniqueWithoutAuthorInputSchema } from './MessageUpsertWithWhereUniqueWithoutAuthorInputSchema';
import { MessageCreateManyAuthorInputEnvelopeSchema } from './MessageCreateManyAuthorInputEnvelopeSchema';
import { MessageWhereUniqueInputSchema } from './MessageWhereUniqueInputSchema';
import { MessageUpdateWithWhereUniqueWithoutAuthorInputSchema } from './MessageUpdateWithWhereUniqueWithoutAuthorInputSchema';
import { MessageUpdateManyWithWhereWithoutAuthorInputSchema } from './MessageUpdateManyWithWhereWithoutAuthorInputSchema';
import { MessageScalarWhereInputSchema } from './MessageScalarWhereInputSchema';

export const MessageUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.MessageUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutAuthorInputSchema),z.lazy(() => MessageCreateWithoutAuthorInputSchema).array(),z.lazy(() => MessageUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => MessageUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MessageCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => MessageCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MessageUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => MessageUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MessageCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MessageUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => MessageUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MessageUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => MessageUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MessageScalarWhereInputSchema),z.lazy(() => MessageScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default MessageUpdateManyWithoutAuthorNestedInputSchema;
