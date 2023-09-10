import { z } from 'zod';
import { MessageTypeEnumSchema } from '../inputTypeSchemas/MessageTypeEnumSchema'

/////////////////////////////////////////
// MESSAGE SCHEMA
/////////////////////////////////////////

export const MessageSchema = z.object({
  type: MessageTypeEnumSchema,
  id: z.number().int(),
  storedAt: z.coerce.date(),
  content: z.string(),
  authorId: z.number().int(),
  conversationId: z.number().int().nullable(),
})

export type Message = z.infer<typeof MessageSchema>

export default MessageSchema;
