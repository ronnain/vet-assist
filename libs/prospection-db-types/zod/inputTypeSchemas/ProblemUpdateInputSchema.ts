import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ProspectUpdateOneWithoutProblemNestedInputSchema } from './ProspectUpdateOneWithoutProblemNestedInputSchema';

export const ProblemUpdateInputSchema: z.ZodType<Prisma.ProblemUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  prospect: z.lazy(() => ProspectUpdateOneWithoutProblemNestedInputSchema).optional()
}).strict();

export default ProblemUpdateInputSchema;
