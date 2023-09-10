import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const ReadAtUpdateManyMutationInputSchema: z.ZodType<Prisma.ReadAtUpdateManyMutationInput> = z.object({
  readAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default ReadAtUpdateManyMutationInputSchema;
