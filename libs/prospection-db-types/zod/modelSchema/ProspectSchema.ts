import { z } from 'zod';

/////////////////////////////////////////
// PROSPECT SCHEMA
/////////////////////////////////////////

export const ProspectSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  email: z.string(),
  offerName: z.string(),
  offerDescription: z.string(),
  rgpd: z.boolean(),
  unsubscribe: z.boolean(),
  unsubscribeLink: z.string(),
})

export type Prospect = z.infer<typeof ProspectSchema>

export default ProspectSchema;
