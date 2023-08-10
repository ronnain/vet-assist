import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PostWhereInputSchema } from './PostWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolNullableFilterSchema } from './BoolNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const PostWhereUniqueInputSchema: z.ZodType<Prisma.PostWhereUniqueInput> = z.object({
  id: z.number()
})
.and(z.object({
  id: z.number().optional(),
  AND: z.union([ z.lazy(() => PostWhereInputSchema),z.lazy(() => PostWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PostWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PostWhereInputSchema),z.lazy(() => PostWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  published: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  authorId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  author: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict());

export default PostWhereUniqueInputSchema;
