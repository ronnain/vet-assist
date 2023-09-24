import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProblemWhereInputSchema } from './ProblemWhereInputSchema';
import { ProblemUpdateWithoutProspectInputSchema } from './ProblemUpdateWithoutProspectInputSchema';
import { ProblemUncheckedUpdateWithoutProspectInputSchema } from './ProblemUncheckedUpdateWithoutProspectInputSchema';

export const ProblemUpdateToOneWithWhereWithoutProspectInputSchema: z.ZodType<Prisma.ProblemUpdateToOneWithWhereWithoutProspectInput> = z.object({
  where: z.lazy(() => ProblemWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProblemUpdateWithoutProspectInputSchema),z.lazy(() => ProblemUncheckedUpdateWithoutProspectInputSchema) ]),
}).strict();

export default ProblemUpdateToOneWithWhereWithoutProspectInputSchema;
