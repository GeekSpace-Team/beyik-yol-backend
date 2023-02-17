import { Test, TestingModule } from '@nestjs/testing';
import { CarEngineService } from './car-engine.service';

describe('CarEngineService', () => {
  let service: CarEngineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarEngineService],
    }).compile();

    service = module.get<CarEngineService>(CarEngineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
