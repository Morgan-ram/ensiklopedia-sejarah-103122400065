import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TokohSejarahModule } from './tokoh-sejarah/tokoh-sejarah.module.js';

@Module({
  imports: [TokohSejarahModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
