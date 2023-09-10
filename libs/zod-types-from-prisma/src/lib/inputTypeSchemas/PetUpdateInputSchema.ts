import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { PetTypeSchema } from './PetTypeSchema';
import { EnumPetTypeFieldUpdateOperationsInputSchema } from './EnumPetTypeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutPetsNestedInputSchema } from './UserUpdateOneRequiredWithoutPetsNestedInputSchema';

export const PetUpdateInputSchema: z.ZodType<Prisma.PetUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => EnumPetTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutPetsNestedInputSchema).optional()
}).strict();

export default PetUpdateInputSchema;
