import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProspectWhereInputSchema } from '../inputTypeSchemas/ProspectWhereInputSchema'

export const ProspectDeleteManyArgsSchema: z.ZodType<Prisma.ProspectDeleteManyArgs> = z.object({
  where: ProspectWhereInputSchema.optional(),
}).strict()

export default ProspectDeleteManyArgsSchema;
