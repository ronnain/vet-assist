import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PetTypeSchema } from './PetTypeSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumPetTypeFilterSchema } from './NestedEnumPetTypeFilterSchema';

export const NestedEnumPetTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPetTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => PetTypeSchema).optional(),
  in: z.lazy(() => PetTypeSchema).array().optional(),
  notIn: z.lazy(() => PetTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => PetTypeSchema),z.lazy(() => NestedEnumPetTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumPetTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumPetTypeFilterSchema).optional()
}).strict();

export default NestedEnumPetTypeWithAggregatesFilterSchema;
