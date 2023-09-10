import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','email','firstName','lastName','phone','role']);

export default UserScalarFieldEnumSchema;
