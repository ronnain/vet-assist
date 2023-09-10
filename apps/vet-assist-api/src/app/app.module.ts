import { Module } from '@nestjs/common';
import { EventsModule } from './websockets/events/events.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [ApiModule, EventsModule],
})
export class AppModule {}
