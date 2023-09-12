import { z } from 'zod';

export const ConversationScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','type']);

export default ConversationScalarFieldEnumSchema;
