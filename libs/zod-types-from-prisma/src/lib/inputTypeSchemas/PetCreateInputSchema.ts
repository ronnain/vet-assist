import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetTypeSchema } from './PetTypeSchema';
import { UserCreateNestedOneWithoutPetsInputSchema } from './UserCreateNestedOneWithoutPetsInputSchema';

export const PetCreateInputSchema: z.ZodType<Prisma.PetCreateInput> = z.object({
  name: z.string(),
  type: z.lazy(() => PetTypeSchema),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutPetsInputSchema)
}).strict();

export default PetCreateInputSchema;
