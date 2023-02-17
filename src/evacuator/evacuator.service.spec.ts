import { Test, TestingModule } from '@nestjs/testing';
import { EvacuatorService } from './evacuator.service';

describe('EvacuatorService', () => {
  let service: EvacuatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvacuatorService],
    }).compile();

    service = module.get<EvacuatorService>(EvacuatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
