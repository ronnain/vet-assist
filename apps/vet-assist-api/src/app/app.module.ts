import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './core/services/prisma/prisma.service';
import { PostStoreService } from './stores/post-store/post-store.service';
import { UserStoreService } from './stores/user-store/user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, UserStoreService, PostStoreService],
})
export class AppModule {}
