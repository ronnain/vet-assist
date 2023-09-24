import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProblemUpdateWithoutProspectInputSchema } from './ProblemUpdateWithoutProspectInputSchema';
import { ProblemUncheckedUpdateWithoutProspectInputSchema } from './ProblemUncheckedUpdateWithoutProspectInputSchema';
import { ProblemCreateWithoutProspectInputSchema } from './ProblemCreateWithoutProspectInputSchema';
import { ProblemUncheckedCreateWithoutProspectInputSchema } from './ProblemUncheckedCreateWithoutProspectInputSchema';
import { ProblemWhereInputSchema } from './ProblemWhereInputSchema';

export const ProblemUpsertWithoutProspectInputSchema: z.ZodType<Prisma.ProblemUpsertWithoutProspectInput> = z.object({
  update: z.union([ z.lazy(() => ProblemUpdateWithoutProspectInputSchema),z.lazy(() => ProblemUncheckedUpdateWithoutProspectInputSchema) ]),
  create: z.union([ z.lazy(() => ProblemCreateWithoutProspectInputSchema),z.lazy(() => ProblemUncheckedCreateWithoutProspectInputSchema) ]),
  where: z.lazy(() => ProblemWhereInputSchema).optional()
}).strict();

export default ProblemUpsertWithoutProspectInputSchema;
