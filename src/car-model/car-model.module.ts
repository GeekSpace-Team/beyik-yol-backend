import { Module } from '@nestjs/common';
import { CarModelService } from './car-model.service';
import { CarModelController } from './car-model.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [CarModelController],
  providers: [CarModelService]
})
export class CarModelModule {}
