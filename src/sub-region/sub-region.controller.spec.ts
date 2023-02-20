import { Test, TestingModule } from '@nestjs/testing';
import { SubRegionController } from './sub-region.controller';
import { SubRegionService } from './sub-region.service';

describe('SubRegionController', () => {
  let controller: SubRegionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubRegionController],
      providers: [SubRegionService],
    }).compile();

    controller = module.get<SubRegionController>(SubRegionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
