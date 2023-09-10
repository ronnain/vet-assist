import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumMessageTypeEnumFilterSchema } from './EnumMessageTypeEnumFilterSchema';
import { MessageTypeEnumSchema } from './MessageTypeEnumSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { ReadAtListRelationFilterSchema } from './ReadAtListRelationFilterSchema';
import { ConversationNullableRelationFilterSchema } from './ConversationNullableRelationFilterSchema';
import { ConversationWhereInputSchema } from './ConversationWhereInputSchema';

export const MessageWhereInputSchema: z.ZodType<Prisma.MessageWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MessageWhereInputSchema),z.lazy(() => MessageWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MessageWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MessageWhereInputSchema),z.lazy(() => MessageWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  storedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumMessageTypeEnumFilterSchema),z.lazy(() => MessageTypeEnumSchema) ]).optional(),
  authorId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  conversationId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  author: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  recipientsFirstTimeRead: z.lazy(() => ReadAtListRelationFilterSchema).optional(),
  conversation: z.union([ z.lazy(() => ConversationNullableRelationFilterSchema),z.lazy(() => ConversationWhereInputSchema) ]).optional().nullable(),
}).strict();

export default MessageWhereInputSchema;