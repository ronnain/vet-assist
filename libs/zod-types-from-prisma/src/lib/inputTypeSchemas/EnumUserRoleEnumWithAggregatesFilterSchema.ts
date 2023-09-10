import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';
import { NestedEnumUserRoleEnumWithAggregatesFilterSchema } from './NestedEnumUserRoleEnumWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumUserRoleEnumFilterSchema } from './NestedEnumUserRoleEnumFilterSchema';

export const EnumUserRoleEnumWithAggregatesFilterSchema: z.ZodType<Prisma.EnumUserRoleEnumWithAggregatesFilter> = z.object({
  equals: z.lazy(() => UserRoleEnumSchema).optional(),
  in: z.lazy(() => UserRoleEnumSchema).array().optional(),
  notIn: z.lazy(() => UserRoleEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRoleEnumSchema),z.lazy(() => NestedEnumUserRoleEnumWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUserRoleEnumFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUserRoleEnumFilterSchema).optional()
}).strict();

export default EnumUserRoleEnumWithAggregatesFilterSchema;
