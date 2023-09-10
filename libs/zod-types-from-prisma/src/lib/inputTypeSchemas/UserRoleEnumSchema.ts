import { z } from 'zod';

export const UserRoleEnumSchema = z.enum(['CUSTOMER','ADMIN','CUSTOMER_SUPPORT']);

export type UserRoleEnumType = `${z.infer<typeof UserRoleEnumSchema>}`

export default UserRoleEnumSchema;
