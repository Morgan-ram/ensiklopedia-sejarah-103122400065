import { Test, TestingModule } from '@nestjs/testing';
import { TokohSejarahService } from './tokoh-sejarah.service.js';

describe('TokohSejarahService', () => {
  let service: TokohSejarahService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TokohSejarahService],
    }).compile();

    service = module.get<TokohSejarahService>(TokohSejarahService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
