import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProspectCreateInputSchema } from '../inputTypeSchemas/ProspectCreateInputSchema'
import { ProspectUncheckedCreateInputSchema } from '../inputTypeSchemas/ProspectUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProspectSelectSchema: z.ZodType<Prisma.ProspectSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  email: z.boolean().optional(),
  offerName: z.boolean().optional(),
  offerDescription: z.boolean().optional(),
  rgpd: z.boolean().optional(),
  unsubscribe: z.boolean().optional(),
  unsubscribeLink: z.boolean().optional(),
  problem: z.boolean().optional(),
}).strict()

export const ProspectCreateArgsSchema: z.ZodType<Prisma.ProspectCreateArgs> = z.object({
  select: ProspectSelectSchema.optional(),
  data: z.union([ ProspectCreateInputSchema,ProspectUncheckedCreateInputSchema ]),
}).strict()

export default ProspectCreateArgsSchema;
