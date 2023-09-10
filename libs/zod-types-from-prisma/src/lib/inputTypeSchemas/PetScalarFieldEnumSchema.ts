import { z } from 'zod';

export const PetScalarFieldEnumSchema = z.enum(['id','name','type','ownerId','createdAt','updatedAt']);

export default PetScalarFieldEnumSchema;
