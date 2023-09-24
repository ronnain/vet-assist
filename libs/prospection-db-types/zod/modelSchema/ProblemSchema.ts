import { z } from 'zod';

/////////////////////////////////////////
// PROBLEM SCHEMA
/////////////////////////////////////////

export const ProblemSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  description: z.string(),
  prospectId: z.number().int().nullable(),
})

export type Problem = z.infer<typeof ProblemSchema>

export default ProblemSchema;
