import { Test, TestingModule } from '@nestjs/testing';
import { EvacuatorController } from './evacuator.controller';
import { EvacuatorService } from './evacuator.service';

describe('EvacuatorController', () => {
  let controller: EvacuatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvacuatorController],
      providers: [EvacuatorService],
    }).compile();

    controller = module.get<EvacuatorController>(EvacuatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
