import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserRoleEnumSchema } from './UserRoleEnumSchema';

export const EnumUserRoleEnumFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumUserRoleEnumFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => UserRoleEnumSchema).optional()
}).strict();

export default EnumUserRoleEnumFieldUpdateOperationsInputSchema;
