import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProblemWhereUniqueInputSchema } from './ProblemWhereUniqueInputSchema';
import { ProblemCreateWithoutProspectInputSchema } from './ProblemCreateWithoutProspectInputSchema';
import { ProblemUncheckedCreateWithoutProspectInputSchema } from './ProblemUncheckedCreateWithoutProspectInputSchema';

export const ProblemCreateOrConnectWithoutProspectInputSchema: z.ZodType<Prisma.ProblemCreateOrConnectWithoutProspectInput> = z.object({
  where: z.lazy(() => ProblemWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProblemCreateWithoutProspectInputSchema),z.lazy(() => ProblemUncheckedCreateWithoutProspectInputSchema) ]),
}).strict();

export default ProblemCreateOrConnectWithoutProspectInputSchema;
