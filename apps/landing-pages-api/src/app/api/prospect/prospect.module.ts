import { Module } from "@nestjs/common";
import { ProspectStoreService } from "./prospect-store.service";
import { ProspectController } from "./prospect.controller";
import { PrismaModule } from "../../core/services/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    controllers: [ProspectController],
    providers: [ProspectStoreService],
  })
  export class ProspectModule {}
