import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PetIncludeSchema } from '../inputTypeSchemas/PetIncludeSchema'
import { PetWhereInputSchema } from '../inputTypeSchemas/PetWhereInputSchema'
import { PetOrderByWithRelationInputSchema } from '../inputTypeSchemas/PetOrderByWithRelationInputSchema'
import { PetWhereUniqueInputSchema } from '../inputTypeSchemas/PetWhereUniqueInputSchema'
import { PetScalarFieldEnumSchema } from '../inputTypeSchemas/PetScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PetSelectSchema: z.ZodType<Prisma.PetSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  ownerId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const PetFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PetFindFirstOrThrowArgs> = z.object({
  select: PetSelectSchema.optional(),
  include: PetIncludeSchema.optional(),
  where: PetWhereInputSchema.optional(),
  orderBy: z.union([ PetOrderByWithRelationInputSchema.array(),PetOrderByWithRelationInputSchema ]).optional(),
  cursor: PetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PetScalarFieldEnumSchema,PetScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default PetFindFirstOrThrowArgsSchema;
