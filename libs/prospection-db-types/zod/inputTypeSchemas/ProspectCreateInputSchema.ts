import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProblemCreateNestedOneWithoutProspectInputSchema } from './ProblemCreateNestedOneWithoutProspectInputSchema';

export const ProspectCreateInputSchema: z.ZodType<Prisma.ProspectCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  email: z.string(),
  offerName: z.string(),
  offerDescription: z.string(),
  rgpd: z.boolean().optional(),
  unsubscribe: z.boolean().optional(),
  unsubscribeLink: z.string(),
  problem: z.lazy(() => ProblemCreateNestedOneWithoutProspectInputSchema).optional()
}).strict();

export default ProspectCreateInputSchema;
