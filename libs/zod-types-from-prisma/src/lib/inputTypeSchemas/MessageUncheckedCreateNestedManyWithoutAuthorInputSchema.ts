import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageCreateWithoutAuthorInputSchema } from './MessageCreateWithoutAuthorInputSchema';
import { MessageUncheckedCreateWithoutAuthorInputSchema } from './MessageUncheckedCreateWithoutAuthorInputSchema';
import { MessageCreateOrConnectWithoutAuthorInputSchema } from './MessageCreateOrConnectWithoutAuthorInputSchema';
import { MessageCreateManyAuthorInputEnvelopeSchema } from './MessageCreateManyAuthorInputEnvelopeSchema';
import { MessageWhereUniqueInputSchema } from './MessageWhereUniqueInputSchema';

export const MessageUncheckedCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.MessageUncheckedCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([ z.lazy(() => MessageCreateWithoutAuthorInputSchema),z.lazy(() => MessageCreateWithoutAuthorInputSchema).array(),z.lazy(() => MessageUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => MessageUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MessageCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => MessageCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MessageCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MessageWhereUniqueInputSchema),z.lazy(() => MessageWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default MessageUncheckedCreateNestedManyWithoutAuthorInputSchema;
