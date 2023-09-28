import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProspectWhereInputSchema } from '../inputTypeSchemas/ProspectWhereInputSchema'
import { ProspectOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProspectOrderByWithRelationInputSchema'
import { ProspectWhereUniqueInputSchema } from '../inputTypeSchemas/ProspectWhereUniqueInputSchema'
import { ProspectScalarFieldEnumSchema } from '../inputTypeSchemas/ProspectScalarFieldEnumSchema'
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

export const ProspectFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProspectFindFirstOrThrowArgs> = z.object({
  select: ProspectSelectSchema.optional(),
  where: ProspectWhereInputSchema.optional(),
  orderBy: z.union([ ProspectOrderByWithRelationInputSchema.array(),ProspectOrderByWithRelationInputSchema ]).optional(),
  cursor: ProspectWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProspectScalarFieldEnumSchema,ProspectScalarFieldEnumSchema.array() ]).optional(),
}).strict()

export default ProspectFindFirstOrThrowArgsSchema;
