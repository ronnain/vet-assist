import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProblemCreateWithoutProspectInputSchema } from './ProblemCreateWithoutProspectInputSchema';
import { ProblemUncheckedCreateWithoutProspectInputSchema } from './ProblemUncheckedCreateWithoutProspectInputSchema';
import { ProblemCreateOrConnectWithoutProspectInputSchema } from './ProblemCreateOrConnectWithoutProspectInputSchema';
import { ProblemUpsertWithoutProspectInputSchema } from './ProblemUpsertWithoutProspectInputSchema';
import { ProblemWhereInputSchema } from './ProblemWhereInputSchema';
import { ProblemWhereUniqueInputSchema } from './ProblemWhereUniqueInputSchema';
import { ProblemUpdateToOneWithWhereWithoutProspectInputSchema } from './ProblemUpdateToOneWithWhereWithoutProspectInputSchema';
import { ProblemUpdateWithoutProspectInputSchema } from './ProblemUpdateWithoutProspectInputSchema';
import { ProblemUncheckedUpdateWithoutProspectInputSchema } from './ProblemUncheckedUpdateWithoutProspectInputSchema';

export const ProblemUncheckedUpdateOneWithoutProspectNestedInputSchema: z.ZodType<Prisma.ProblemUncheckedUpdateOneWithoutProspectNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProblemCreateWithoutProspectInputSchema),z.lazy(() => ProblemUncheckedCreateWithoutProspectInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProblemCreateOrConnectWithoutProspectInputSchema).optional(),
  upsert: z.lazy(() => ProblemUpsertWithoutProspectInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProblemWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProblemWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProblemWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProblemUpdateToOneWithWhereWithoutProspectInputSchema),z.lazy(() => ProblemUpdateWithoutProspectInputSchema),z.lazy(() => ProblemUncheckedUpdateWithoutProspectInputSchema) ]).optional(),
}).strict();

export default ProblemUncheckedUpdateOneWithoutProspectNestedInputSchema;
