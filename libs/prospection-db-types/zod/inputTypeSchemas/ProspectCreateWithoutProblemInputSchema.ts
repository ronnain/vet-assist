import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProspectCreateWithoutProblemInputSchema: z.ZodType<Prisma.ProspectCreateWithoutProblemInput> = z.object({
  createdAt: z.coerce.date().optional(),
  email: z.string(),
  offerName: z.string(),
  offerDescription: z.string(),
  rgpd: z.boolean().optional(),
  unsubscribe: z.boolean().optional(),
  unsubscribeLink: z.string()
}).strict();

export default ProspectCreateWithoutProblemInputSchema;
