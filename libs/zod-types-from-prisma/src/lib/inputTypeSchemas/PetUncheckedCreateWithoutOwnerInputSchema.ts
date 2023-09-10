import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetTypeSchema } from './PetTypeSchema';

export const PetUncheckedCreateWithoutOwnerInputSchema: z.ZodType<Prisma.PetUncheckedCreateWithoutOwnerInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  type: z.lazy(() => PetTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default PetUncheckedCreateWithoutOwnerInputSchema;
