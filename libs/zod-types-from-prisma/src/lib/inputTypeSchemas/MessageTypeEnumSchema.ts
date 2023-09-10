import { z } from 'zod';

export const MessageTypeEnumSchema = z.enum(['TEXT','IMAGE_URL','VIDEO_URL','AUDIO_URL','DOCUMENT_URL']);

export type MessageTypeEnumType = `${z.infer<typeof MessageTypeEnumSchema>}`

export default MessageTypeEnumSchema;
