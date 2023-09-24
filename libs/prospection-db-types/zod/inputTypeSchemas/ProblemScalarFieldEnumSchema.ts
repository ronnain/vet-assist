import { z } from 'zod';

export const ProblemScalarFieldEnumSchema = z.enum(['id','createdAt','description','prospectId']);

export default ProblemScalarFieldEnumSchema;
