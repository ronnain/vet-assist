import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReadAtSelectSchema } from '../inputTypeSchemas/ReadAtSelectSchema';
import { ReadAtIncludeSchema } from '../inputTypeSchemas/ReadAtIncludeSchema';

export const ReadAtArgsSchema: z.ZodType<Prisma.ReadAtDefaultArgs> = z.object({
  select: z.lazy(() => ReadAtSelectSchema).optional(),
  include: z.lazy(() => ReadAtIncludeSchema).optional(),
}).strict();

export default ReadAtArgsSchema;
