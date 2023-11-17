import { Module } from "@nestjs/common";
import { ProspectStoreService } from "./prospect-store.service";
import { ProspectController } from "./prospect.controller";
import { PrismaModule } from "../../core/services/prisma/prisma.module";
import { MailModule } from "../../core/services/mail/mail.module";

@Module({
    imports: [PrismaModule, MailModule],
    controllers: [ProspectController],
    providers: [ProspectStoreService],
  })
  export class ProspectModule {}
