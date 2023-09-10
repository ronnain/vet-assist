import { z } from 'zod';

export const MessageScalarFieldEnumSchema = z.enum(['id','storedAt','content','type','authorId','conversationId']);

export default MessageScalarFieldEnumSchema;
