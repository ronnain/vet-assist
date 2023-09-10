import { z } from 'zod';
import { PetTypeSchema } from '../inputTypeSchemas/PetTypeSchema'

/////////////////////////////////////////
// PET SCHEMA
/////////////////////////////////////////

export const PetSchema = z.object({
  type: PetTypeSchema,
  id: z.number().int(),
  name: z.string(),
  ownerId: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Pet = z.infer<typeof PetSchema>

export default PetSchema;
