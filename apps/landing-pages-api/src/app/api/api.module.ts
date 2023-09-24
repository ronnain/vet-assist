import { Module } from "@nestjs/common";
import { ProspectModule } from "./prospect/prospect.module";

@Module({
    imports: [
        ProspectModule,
    ],
  })
  export class ApiModule {}
