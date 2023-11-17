import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ApiModule, ConfigModule.forRoot()],
  providers: [AppService],
})
export class AppModule {}
