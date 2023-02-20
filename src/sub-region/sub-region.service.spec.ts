import { Test, TestingModule } from '@nestjs/testing';
import { SubRegionService } from './sub-region.service';

describe('SubRegionService', () => {
  let service: SubRegionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubRegionService],
    }).compile();

    service = module.get<SubRegionService>(SubRegionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
