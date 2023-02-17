import { Module } from '@nestjs/common';
import { CarOptionService } from './car-option.service';
import { CarOptionController } from './car-option.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [CarOptionController],
  providers: [CarOptionService]
})
export class CarOptionModule {}
