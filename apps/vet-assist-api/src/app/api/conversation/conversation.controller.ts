import { Controller } from "@nestjs/common";
import { TsRestHandler, tsRestHandler } from "@ts-rest/nest";
import { ConversationStoreService } from "./conversation-store.service";
import { ConversationContract } from "@vet-assist/api-contract";


@Controller()
export class ConversationController {

  constructor(private readonly conversationStoreService: ConversationStoreService) {}

  @TsRestHandler(ConversationContract)
  async handler() {
    return tsRestHandler(ConversationContract, {
      getFeed: async ({ params }) => {
        const userId = params.userId ? parseInt(params.userId) : undefined;
        const feed = await this.conversationStoreService.messages({
          where: {
            id: userId
          }
        });

        return { status: 200, body: feed };
      },
      conversation: async ({ params }) => {
        const conversationId = params.conversationId ? parseInt(params.conversationId) : undefined;
        const conversation = await this.conversationStoreService.conversation({
          where: {
            id: conversationId
          }
        });

        if (!conversation) {
          return { status: 404, body: null};
        }

        return { status: 200, body: conversation };
      },
      conversations: async ({ query }) => {
        const conversations = await this.conversationStoreService.conversations(query);
        return { status: 200, body: conversations };
      }
    });
  }
}