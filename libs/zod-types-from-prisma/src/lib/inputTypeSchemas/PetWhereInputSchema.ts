import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumPetTypeFilterSchema } from './EnumPetTypeFilterSchema';
import { PetTypeSchema } from './PetTypeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const PetWhereInputSchema: z.ZodType<Prisma.PetWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PetWhereInputSchema),z.lazy(() => PetWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PetWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PetWhereInputSchema),z.lazy(() => PetWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumPetTypeFilterSchema),z.lazy(() => PetTypeSchema) ]).optional(),
  ownerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  owner: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export default PetWhereInputSchema;
