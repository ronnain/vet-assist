import { Module } from "@nestjs/common";
import { PrismaService } from "../core/services/prisma/prisma.service";
import { ConversationModule } from "./conversation/conversation.module";

@Module({
    imports: [ConversationModule],
    providers: [PrismaService],
  })
  export class ApiModule {}
