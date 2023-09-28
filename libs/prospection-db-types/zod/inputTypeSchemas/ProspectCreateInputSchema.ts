import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProspectCreateInputSchema: z.ZodType<Prisma.ProspectCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  email: z.string(),
  offerName: z.string(),
  offerDescription: z.string(),
  rgpd: z.boolean().optional(),
  unsubscribe: z.boolean().optional(),
  unsubscribeLink: z.string(),
  problem: z.string().optional().nullable()
}).strict();

export default ProspectCreateInputSchema;
