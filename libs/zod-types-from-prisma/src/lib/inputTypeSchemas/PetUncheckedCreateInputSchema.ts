import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetTypeSchema } from './PetTypeSchema';

export const PetUncheckedCreateInputSchema: z.ZodType<Prisma.PetUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  type: z.lazy(() => PetTypeSchema),
  ownerId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default PetUncheckedCreateInputSchema;
