import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProspectSelectSchema } from '../inputTypeSchemas/ProspectSelectSchema';
import { ProspectIncludeSchema } from '../inputTypeSchemas/ProspectIncludeSchema';

export const ProspectArgsSchema: z.ZodType<Prisma.ProspectDefaultArgs> = z.object({
  select: z.lazy(() => ProspectSelectSchema).optional(),
  include: z.lazy(() => ProspectIncludeSchema).optional(),
}).strict();

export default ProspectArgsSchema;
