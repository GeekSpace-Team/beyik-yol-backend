import { Test, TestingModule } from '@nestjs/testing';
import { CarOptionController } from './car-option.controller';
import { CarOptionService } from './car-option.service';

describe('CarOptionController', () => {
  let controller: CarOptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarOptionController],
      providers: [CarOptionService],
    }).compile();

    controller = module.get<CarOptionController>(CarOptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
