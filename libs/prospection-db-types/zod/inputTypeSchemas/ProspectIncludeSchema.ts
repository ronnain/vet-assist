import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProblemArgsSchema } from "../outputTypeSchemas/ProblemArgsSchema"

export const ProspectIncludeSchema: z.ZodType<Prisma.ProspectInclude> = z.object({
  problem: z.union([z.boolean(),z.lazy(() => ProblemArgsSchema)]).optional(),
}).strict()

export default ProspectIncludeSchema;
