import { Test, TestingModule } from '@nestjs/testing';
import { CarTransmitionController } from './car-transmition.controller';
import { CarTransmitionService } from './car-transmition.service';

describe('CarTransmitionController', () => {
  let controller: CarTransmitionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarTransmitionController],
      providers: [CarTransmitionService],
    }).compile();

    controller = module.get<CarTransmitionController>(CarTransmitionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
