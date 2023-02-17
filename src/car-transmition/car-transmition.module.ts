import { Module } from '@nestjs/common';
import { CarTransmitionService } from './car-transmition.service';
import { CarTransmitionController } from './car-transmition.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [CarTransmitionController],
  providers: [CarTransmitionService]
})
export class CarTransmitionModule {}
