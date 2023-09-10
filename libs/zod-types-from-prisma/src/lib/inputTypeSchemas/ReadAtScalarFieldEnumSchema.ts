import { z } from 'zod';

export const ReadAtScalarFieldEnumSchema = z.enum(['id','readAt','userId','messageId']);

export default ReadAtScalarFieldEnumSchema;
