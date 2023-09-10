import { initContract } from '@ts-rest/core';
import { ConversationFindManyArgsSchema, ConversationSchema, MessageSchema } from '@vet-assist/zod-types-from-prisma';

const c = initContract();

export const ConversationContract = c.router({
  getFeed: {
    method: 'GET',
    path: `feed/:userId`,
    responses: {
      200: MessageSchema.array(),
    },
    summary: 'Get messages for a user',
  },
  conversation: {
    method: 'GET',
    path: `/:conversationId`,
    responses: {
      200: ConversationSchema,
      404: null
    },
    summary: 'Get a conversation by id'
  },
  conversations: {
    method: 'GET',
    path: ``,
    responses: {
      200: ConversationSchema.array(),
      404: null
    },
    query: ConversationFindManyArgsSchema,
    summary: 'Get a post by id',
  },
},
 {
  pathPrefix: 'conversations'
 });