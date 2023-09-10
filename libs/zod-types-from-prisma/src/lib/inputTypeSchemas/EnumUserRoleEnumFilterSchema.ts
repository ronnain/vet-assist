import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';
import { NestedEnumUserRoleEnumFilterSchema } from './NestedEnumUserRoleEnumFilterSchema';

export const EnumUserRoleEnumFilterSchema: z.ZodType<Prisma.EnumUserRoleEnumFilter> = z.object({
  equals: z.lazy(() => UserRoleEnumSchema).optional(),
  in: z.lazy(() => UserRoleEnumSchema).array().optional(),
  notIn: z.lazy(() => UserRoleEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRoleEnumSchema),z.lazy(() => NestedEnumUserRoleEnumFilterSchema) ]).optional(),
}).strict();

export default EnumUserRoleEnumFilterSchema;
