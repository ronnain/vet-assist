import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumPetTypeWithAggregatesFilterSchema } from './EnumPetTypeWithAggregatesFilterSchema';
import { PetTypeSchema } from './PetTypeSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const PetScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PetScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PetScalarWhereWithAggregatesInputSchema),z.lazy(() => PetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PetScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PetScalarWhereWithAggregatesInputSchema),z.lazy(() => PetScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumPetTypeWithAggregatesFilterSchema),z.lazy(() => PetTypeSchema) ]).optional(),
  ownerId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default PetScalarWhereWithAggregatesInputSchema;
