import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumUserRoleEnumFilterSchema } from './EnumUserRoleEnumFilterSchema';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';
import { MessageListRelationFilterSchema } from './MessageListRelationFilterSchema';
import { ReadAtListRelationFilterSchema } from './ReadAtListRelationFilterSchema';
import { ConversationListRelationFilterSchema } from './ConversationListRelationFilterSchema';
import { PetListRelationFilterSchema } from './PetListRelationFilterSchema';

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.number(),
    email: z.string(),
    phone: z.string()
  }),
  z.object({
    id: z.number(),
    email: z.string(),
  }),
  z.object({
    id: z.number(),
    phone: z.string(),
  }),
  z.object({
    id: z.number(),
  }),
  z.object({
    email: z.string(),
    phone: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
  z.object({
    phone: z.string(),
  }),
])
.and(z.object({
  id: z.number().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  role: z.union([ z.lazy(() => EnumUserRoleEnumFilterSchema),z.lazy(() => UserRoleEnumSchema) ]).optional(),
  authorMessages: z.lazy(() => MessageListRelationFilterSchema).optional(),
  firstTimeReadMessages: z.lazy(() => ReadAtListRelationFilterSchema).optional(),
  conversations: z.lazy(() => ConversationListRelationFilterSchema).optional(),
  pets: z.lazy(() => PetListRelationFilterSchema).optional()
}).strict());

export default UserWhereUniqueInputSchema;
