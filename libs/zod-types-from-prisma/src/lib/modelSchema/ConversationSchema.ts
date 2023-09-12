import { z } from 'zod';
import { ConversationTypeSchema } from '../inputTypeSchemas/ConversationTypeSchema'

/////////////////////////////////////////
// CONVERSATION SCHEMA
/////////////////////////////////////////

export const ConversationSchema = z.object({
  type: ConversationTypeSchema,
  id: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Conversation = z.infer<typeof ConversationSchema>

export default ConversationSchema;
