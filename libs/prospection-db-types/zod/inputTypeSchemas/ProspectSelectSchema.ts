import { z } from 'zod';
import type { Prisma } from '@prisma/client';

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

export default ProspectSelectSchema;
