import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetTypeSchema } from './PetTypeSchema';

export const PetCreateWithoutOwnerInputSchema: z.ZodType<Prisma.PetCreateWithoutOwnerInput> = z.object({
  name: z.string(),
  type: z.lazy(() => PetTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default PetCreateWithoutOwnerInputSchema;
