import { initContract } from "@ts-rest/core";
import { ConversationContract } from "./conversation-contract";

const c = initContract();

export const RootContract = c.router({
        conversations: ConversationContract
    },
    {
        pathPrefix: '/api/v1',
    });