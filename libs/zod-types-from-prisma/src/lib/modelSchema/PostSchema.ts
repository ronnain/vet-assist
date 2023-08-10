import { z } from 'zod';

/////////////////////////////////////////
// POST SCHEMA
/////////////////////////////////////////

export const PostSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  content: z.string().nullable(),
  published: z.boolean().nullable(),
  authorId: z.number().int().nullable(),
})

export type Post = z.infer<typeof PostSchema>

export default PostSchema;
