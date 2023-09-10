import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumUserRoleEnumFilterSchema } from './EnumUserRoleEnumFilterSchema';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';
import { MessageListRelationFilterSchema } from './MessageListRelationFilterSchema';
import { ReadAtListRelationFilterSchema } from './ReadAtListRelationFilterSchema';
import { ConversationListRelationFilterSchema } from './ConversationListRelationFilterSchema';
import { PetListRelationFilterSchema } from './PetListRelationFilterSchema';

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  phone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumUserRoleEnumFilterSchema),z.lazy(() => UserRoleEnumSchema) ]).optional(),
  authorMessages: z.lazy(() => MessageListRelationFilterSchema).optional(),
  firstTimeReadMessages: z.lazy(() => ReadAtListRelationFilterSchema).optional(),
  conversations: z.lazy(() => ConversationListRelationFilterSchema).optional(),
  pets: z.lazy(() => PetListRelationFilterSchema).optional()
}).strict();

export default UserWhereInputSchema;
