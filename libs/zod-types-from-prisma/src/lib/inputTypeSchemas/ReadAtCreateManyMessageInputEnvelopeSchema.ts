import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReadAtCreateManyMessageInputSchema } from './ReadAtCreateManyMessageInputSchema';

export const ReadAtCreateManyMessageInputEnvelopeSchema: z.ZodType<Prisma.ReadAtCreateManyMessageInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReadAtCreateManyMessageInputSchema),z.lazy(() => ReadAtCreateManyMessageInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ReadAtCreateManyMessageInputEnvelopeSchema;
