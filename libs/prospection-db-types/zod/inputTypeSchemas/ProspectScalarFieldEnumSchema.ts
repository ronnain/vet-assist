import { z } from 'zod';

export const ProspectScalarFieldEnumSchema = z.enum(['id','createdAt','email','offerName','offerDescription','rgpd','unsubscribe','unsubscribeLink']);

export default ProspectScalarFieldEnumSchema;
