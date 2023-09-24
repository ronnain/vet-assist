import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProblemArgsSchema } from "../outputTypeSchemas/ProblemArgsSchema"

export const ProspectSelectSchema: z.ZodType<Prisma.ProspectSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  email: z.boolean().optional(),
  offerName: z.boolean().optional(),
  offerDescription: z.boolean().optional(),
  rgpd: z.boolean().optional(),
  unsubscribe: z.boolean().optional(),
  unsubscribeLink: z.boolean().optional(),
  problem: z.union([z.boolean(),z.lazy(() => ProblemArgsSchema)]).optional(),
}).strict()

export default ProspectSelectSchema;
