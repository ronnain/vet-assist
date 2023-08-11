import { TsRestHandler, nestControllerContract, tsRestHandler } from '@ts-rest/nest';
import { Controller } from '@nestjs/common';
import { contract } from '@vet-assist/api-contract';
import { PostStoreService } from '../../stores/post-store/post-store.service';

const c = nestControllerContract(contract);
@Controller()
export class PostController {
  constructor(private readonly postStoreService: PostStoreService) {}

  @TsRestHandler(c)
  async handler() {
    return tsRestHandler(c, {
      createPost: async ({ body }) => {
        const post = await this.postStoreService.createPost(body);

        return { status: 200, body: post };
      },
      getPost: async ({ params }) => {
        const post = await this.postStoreService.post({id: params.id ? parseInt(params.id) : undefined });

        if (!post) {
          return { status: 404, body: null };
        }

        return { status: 200, body: post };
      },
      getPosts: async () => {
        const posts = await this.postStoreService.posts({});
        return { status: 200, body: posts };
      },
    });
  }
}