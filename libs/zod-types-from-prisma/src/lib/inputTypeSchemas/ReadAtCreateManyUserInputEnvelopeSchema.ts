import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ReadAtCreateManyUserInputSchema } from './ReadAtCreateManyUserInputSchema';

export const ReadAtCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ReadAtCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReadAtCreateManyUserInputSchema),z.lazy(() => ReadAtCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ReadAtCreateManyUserInputEnvelopeSchema;
