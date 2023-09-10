import { z } from 'zod';
import { UserRoleEnumSchema } from '../inputTypeSchemas/UserRoleEnumSchema'

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: UserRoleEnumSchema,
  id: z.number().int(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema;
