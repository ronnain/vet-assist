import { initContract } from '@ts-rest/core';
import { PostFindManyArgsSchema } from '@vet-assist/zod-types-from-prisma/outputTypeSchemas';
import { PostCreateInputSchema } from '@vet-assist/zod-types-from-prisma/inputTypeSchemas';
import { PostSchema } from '@vet-assist/zod-types-from-prisma/modelSchema';

const c = initContract();

export const contract = c.router({
  createPost: {
    method: 'POST',
    path: '/posts',
    responses: {
      201: PostSchema,
    },
    body: PostCreateInputSchema,
    summary: 'Create a post',
  },
  getPost: {
    method: 'GET',
    path: `/posts/:id`,
    responses: {
      200: PostSchema,
      404: null
    },
    summary: 'Get a post by id',
  },
  getPosts: {
    method: 'POST',
    path: `/posts`,
    responses: {
      200: PostSchema.array(),
    },
    body: PostFindManyArgsSchema,
    summary: 'Get post by search criteria',
  },
});