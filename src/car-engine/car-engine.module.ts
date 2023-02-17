import { Module } from '@nestjs/common';
import { CarEngineService } from './car-engine.service';
import { CarEngineController } from './car-engine.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [CarEngineController],
  providers: [CarEngineService]
})
export class CarEngineModule {}
