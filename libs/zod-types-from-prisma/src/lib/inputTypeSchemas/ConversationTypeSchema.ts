import { z } from 'zod';

export const ConversationTypeSchema = z.enum(['CLOSED','OPEN']);

export type ConversationTypeType = `${z.infer<typeof ConversationTypeSchema>}`

export default ConversationTypeSchema;
