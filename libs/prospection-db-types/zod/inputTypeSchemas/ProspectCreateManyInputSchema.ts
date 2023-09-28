import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProspectCreateManyInputSchema: z.ZodType<Prisma.ProspectCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  email: z.string(),
  offerName: z.string(),
  offerDescription: z.string(),
  rgpd: z.boolean().optional(),
  unsubscribe: z.boolean().optional(),
  unsubscribeLink: z.string(),
  problem: z.string().optional().nullable()
}).strict();

export default ProspectCreateManyInputSchema;
