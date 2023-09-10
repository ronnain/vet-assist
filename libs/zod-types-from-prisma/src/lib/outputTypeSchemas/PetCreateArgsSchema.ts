import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PetIncludeSchema } from '../inputTypeSchemas/PetIncludeSchema'
import { PetCreateInputSchema } from '../inputTypeSchemas/PetCreateInputSchema'
import { PetUncheckedCreateInputSchema } from '../inputTypeSchemas/PetUncheckedCreateInputSchema'
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

export const PetCreateArgsSchema: z.ZodType<Prisma.PetCreateArgs> = z.object({
  select: PetSelectSchema.optional(),
  include: PetIncludeSchema.optional(),
  data: z.union([ PetCreateInputSchema,PetUncheckedCreateInputSchema ]),
}).strict()

export default PetCreateArgsSchema;
