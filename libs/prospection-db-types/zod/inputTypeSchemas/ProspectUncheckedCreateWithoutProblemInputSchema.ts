import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ProspectUncheckedCreateWithoutProblemInputSchema: z.ZodType<Prisma.ProspectUncheckedCreateWithoutProblemInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  email: z.string(),
  offerName: z.string(),
  offerDescription: z.string(),
  rgpd: z.boolean().optional(),
  unsubscribe: z.boolean().optional(),
  unsubscribeLink: z.string()
}).strict();

export default ProspectUncheckedCreateWithoutProblemInputSchema;
