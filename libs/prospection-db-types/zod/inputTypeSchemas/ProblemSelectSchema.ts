import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProspectArgsSchema } from "../outputTypeSchemas/ProspectArgsSchema"

export const ProblemSelectSchema: z.ZodType<Prisma.ProblemSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  description: z.boolean().optional(),
  prospectId: z.boolean().optional(),
  prospect: z.union([z.boolean(),z.lazy(() => ProspectArgsSchema)]).optional(),
}).strict()

export default ProblemSelectSchema;
