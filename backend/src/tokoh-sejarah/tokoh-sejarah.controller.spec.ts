import { Test, TestingModule } from '@nestjs/testing';
import { TokohSejarahController } from './tokoh-sejarah.controller.js';
import { TokohSejarahService } from './tokoh-sejarah.service.js';

describe('TokohSejarahController', () => {
  let controller: TokohSejarahController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TokohSejarahController],
      providers: [TokohSejarahService],
    }).compile();

    controller = module.get<TokohSejarahController>(TokohSejarahController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
