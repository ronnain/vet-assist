import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { PostFindManySchema } from '@vet-assist/zod-types-from-prisma';


const c = initContract();

const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string().nullable(),
  published: z.boolean().nullable(),
  authorId: z.number().nullable()
});

// TODO EXPOSE ALL SCHEMAS FROM PISMA GENERATED TYPES

export const contract = c.router({
  createPost: {
    method: 'POST',
    path: '/posts',
    responses: {
      201: PostSchema,
    },
    body: PostFindManySchema,
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
    body: PostSchema.partial().nullable(),
    summary: 'Get post by search criteria',
  },
});