import { z } from 'zod';

export const ConversationScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt']);

export default ConversationScalarFieldEnumSchema;
