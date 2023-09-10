import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';

export const NestedEnumUserRoleEnumFilterSchema: z.ZodType<Prisma.NestedEnumUserRoleEnumFilter> = z.object({
  equals: z.lazy(() => UserRoleEnumSchema).optional(),
  in: z.lazy(() => UserRoleEnumSchema).array().optional(),
  notIn: z.lazy(() => UserRoleEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRoleEnumSchema),z.lazy(() => NestedEnumUserRoleEnumFilterSchema) ]).optional(),
}).strict();

export default NestedEnumUserRoleEnumFilterSchema;
