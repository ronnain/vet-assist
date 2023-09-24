import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProspectArgsSchema } from "../outputTypeSchemas/ProspectArgsSchema"

export const ProblemIncludeSchema: z.ZodType<Prisma.ProblemInclude> = z.object({
  prospect: z.union([z.boolean(),z.lazy(() => ProspectArgsSchema)]).optional(),
}).strict()

export default ProblemIncludeSchema;
