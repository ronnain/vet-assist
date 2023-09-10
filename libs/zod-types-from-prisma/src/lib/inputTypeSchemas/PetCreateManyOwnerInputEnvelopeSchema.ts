import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetCreateManyOwnerInputSchema } from './PetCreateManyOwnerInputSchema';

export const PetCreateManyOwnerInputEnvelopeSchema: z.ZodType<Prisma.PetCreateManyOwnerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PetCreateManyOwnerInputSchema),z.lazy(() => PetCreateManyOwnerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PetCreateManyOwnerInputEnvelopeSchema;
