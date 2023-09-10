import { Module } from "@nestjs/common";
import { ConversationStoreService } from "./conversation-store.service";
import { ConversationController } from "./conversation.controller";
import { PrismaService } from "../../core/services/prisma/prisma.service";

@Module({
    controllers: [ConversationController],
    providers: [ConversationStoreService, PrismaService],
  })
  export class ConversationModule {}
