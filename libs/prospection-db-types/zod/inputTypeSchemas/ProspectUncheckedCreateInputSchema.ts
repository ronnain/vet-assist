import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProblemUncheckedCreateNestedOneWithoutProspectInputSchema } from './ProblemUncheckedCreateNestedOneWithoutProspectInputSchema';

export const ProspectUncheckedCreateInputSchema: z.ZodType<Prisma.ProspectUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  email: z.string(),
  offerName: z.string(),
  offerDescription: z.string(),
  rgpd: z.boolean().optional(),
  unsubscribe: z.boolean().optional(),
  unsubscribeLink: z.string(),
  problem: z.lazy(() => ProblemUncheckedCreateNestedOneWithoutProspectInputSchema).optional()
}).strict();

export default ProspectUncheckedCreateInputSchema;
