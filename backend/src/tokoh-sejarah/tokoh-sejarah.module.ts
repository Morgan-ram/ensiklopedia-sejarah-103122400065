import { Module } from '@nestjs/common';
import { TokohSejarahController } from './tokoh-sejarah.controller.js';
import { TokohSejarahService } from './tokoh-sejarah.service.js';

@Module({
  controllers: [TokohSejarahController],
  providers: [TokohSejarahService],
})
export class TokohSejarahModule {}