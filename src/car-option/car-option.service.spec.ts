import { Test, TestingModule } from '@nestjs/testing';
import { CarOptionService } from './car-option.service';

describe('CarOptionService', () => {
  let service: CarOptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarOptionService],
    }).compile();

    service = module.get<CarOptionService>(CarOptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
