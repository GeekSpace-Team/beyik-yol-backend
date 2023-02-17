import { Test, TestingModule } from '@nestjs/testing';
import { CarTransmitionService } from './car-transmition.service';

describe('CarTransmitionService', () => {
  let service: CarTransmitionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarTransmitionService],
    }).compile();

    service = module.get<CarTransmitionService>(CarTransmitionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
