import { initContract } from '@ts-rest/core';
import { ProspectSchema } from '@prospection-db/types/zod/modelSchema';
import { ProspectFindManyArgsSchema } from '@prospection-db/types/zod/outputTypeSchemas';
import { ProspectUpdateInputSchema } from '@prospection-db/types/zod/inputTypeSchemas';

const c = initContract();


export const ProspectContract = c.router({
  prospect: {
    method: 'GET',
    path: `/:prospectId`,
    responses: {
      200: ProspectSchema,
      404: null
    },
    summary: 'Get a prospect by id'
  },
  prospects: {
    method: 'GET',
    path: ``,
    responses: {
      200: ProspectSchema.array(),
      404: null
    },
    query: ProspectFindManyArgsSchema,
    summary: 'Get all prospect by id',
  },
  // Add a new prospect
  createProspect: {
    method: 'POST',
    path: ``,
    responses: {
      200: ProspectSchema,
      404: null
    },
    body: ProspectSchema,
    summary: 'Add a new prospect',
  },
  // Update a prospect
  updateProspect: {
    method: 'PUT',
    path: `/:prospectId`,
    responses: {
      200: ProspectSchema,
      404: null
    },
    body: ProspectSchema,
    summary: 'Update a prospect',
  },
  patchProspect: {
    method: 'PATCH',
    path: `/:prospectId`,
    responses: {
      200: ProspectSchema,
      404: null
    },
    body: ProspectUpdateInputSchema,
    summary: 'Patch a prospect',
  },
  storeEmailProspect: {
    method: 'POST',
    path: `/email`,
    responses: {
      200: ProspectSchema
    },
    body: ProspectSchema.pick({
      email: true,
      offerName: true,
      offerDescription: true,
     }),
    summary: 'Store an email prospect',
  },
  // Delete a prospect
  // deleteProspect: {
  //   method: 'DELETE',
  //   path: `/:prospectId`,
  //   responses: {
  //     200: null,
  //     404: null
  //   },
  //   summary: 'Delete a prospect',
  // },
},
 {
  pathPrefix: '/prospects'
 }
 );