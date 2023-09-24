import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProblemCreateWithoutProspectInputSchema } from './ProblemCreateWithoutProspectInputSchema';
import { ProblemUncheckedCreateWithoutProspectInputSchema } from './ProblemUncheckedCreateWithoutProspectInputSchema';
import { ProblemCreateOrConnectWithoutProspectInputSchema } from './ProblemCreateOrConnectWithoutProspectInputSchema';
import { ProblemWhereUniqueInputSchema } from './ProblemWhereUniqueInputSchema';

export const ProblemUncheckedCreateNestedOneWithoutProspectInputSchema: z.ZodType<Prisma.ProblemUncheckedCreateNestedOneWithoutProspectInput> = z.object({
  create: z.union([ z.lazy(() => ProblemCreateWithoutProspectInputSchema),z.lazy(() => ProblemUncheckedCreateWithoutProspectInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProblemCreateOrConnectWithoutProspectInputSchema).optional(),
  connect: z.lazy(() => ProblemWhereUniqueInputSchema).optional()
}).strict();

export default ProblemUncheckedCreateNestedOneWithoutProspectInputSchema;
