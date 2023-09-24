import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProblemSelectSchema } from '../inputTypeSchemas/ProblemSelectSchema';
import { ProblemIncludeSchema } from '../inputTypeSchemas/ProblemIncludeSchema';

export const ProblemArgsSchema: z.ZodType<Prisma.ProblemDefaultArgs> = z.object({
  select: z.lazy(() => ProblemSelectSchema).optional(),
  include: z.lazy(() => ProblemIncludeSchema).optional(),
}).strict();

export default ProblemArgsSchema;
