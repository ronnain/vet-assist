import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumPetTypeFilterSchema } from './EnumPetTypeFilterSchema';
import { PetTypeSchema } from './PetTypeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const PetScalarWhereInputSchema: z.ZodType<Prisma.PetScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PetScalarWhereInputSchema),z.lazy(() => PetScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PetScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PetScalarWhereInputSchema),z.lazy(() => PetScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumPetTypeFilterSchema),z.lazy(() => PetTypeSchema) ]).optional(),
  ownerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default PetScalarWhereInputSchema;
