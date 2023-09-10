import { z } from 'zod';

export const RecipientSchema = z.enum(['STAFF','CUSTOMER']);

export type RecipientType = `${z.infer<typeof RecipientSchema>}`

export default RecipientSchema;
