import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MessageCreateManyAuthorInputSchema } from './MessageCreateManyAuthorInputSchema';

export const MessageCreateManyAuthorInputEnvelopeSchema: z.ZodType<Prisma.MessageCreateManyAuthorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => MessageCreateManyAuthorInputSchema),z.lazy(() => MessageCreateManyAuthorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default MessageCreateManyAuthorInputEnvelopeSchema;
