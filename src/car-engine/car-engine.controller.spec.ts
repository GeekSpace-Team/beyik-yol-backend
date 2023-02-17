import { Test, TestingModule } from '@nestjs/testing';
import { CarEngineController } from './car-engine.controller';
import { CarEngineService } from './car-engine.service';

describe('CarEngineController', () => {
  let controller: CarEngineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarEngineController],
      providers: [CarEngineService],
    }).compile();

    controller = module.get<CarEngineController>(CarEngineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
