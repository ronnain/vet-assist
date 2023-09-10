import { z } from 'zod';

/////////////////////////////////////////
// READ AT SCHEMA
/////////////////////////////////////////

export const ReadAtSchema = z.object({
  id: z.number().int(),
  readAt: z.coerce.date(),
  userId: z.number().int(),
  messageId: z.number().int(),
})

export type ReadAt = z.infer<typeof ReadAtSchema>

export default ReadAtSchema;
