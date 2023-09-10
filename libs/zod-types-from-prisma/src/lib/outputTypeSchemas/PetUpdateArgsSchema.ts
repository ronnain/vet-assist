import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PetIncludeSchema } from '../inputTypeSchemas/PetIncludeSchema'
import { PetUpdateInputSchema } from '../inputTypeSchemas/PetUpdateInputSchema'
import { PetUncheckedUpdateInputSchema } from '../inputTypeSchemas/PetUncheckedUpdateInputSchema'
import { PetWhereUniqueInputSchema } from '../inputTypeSchemas/PetWhereUniqueInputSchema'
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

export const PetUpdateArgsSchema: z.ZodType<Prisma.PetUpdateArgs> = z.object({
  select: PetSelectSchema.optional(),
  include: PetIncludeSchema.optional(),
  data: z.union([ PetUpdateInputSchema,PetUncheckedUpdateInputSchema ]),
  where: PetWhereUniqueInputSchema,
}).strict()

export default PetUpdateArgsSchema;
