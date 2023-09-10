import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReadAtWhereInputSchema } from '../inputTypeSchemas/ReadAtWhereInputSchema'

export const ReadAtDeleteManyArgsSchema: z.ZodType<Prisma.ReadAtDeleteManyArgs> = z.object({
  where: ReadAtWhereInputSchema.optional(),
}).strict()

export default ReadAtDeleteManyArgsSchema;
