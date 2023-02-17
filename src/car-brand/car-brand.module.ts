import { Module } from '@nestjs/common';
import { CarBrandService } from './car-brand.service';
import { CarBrandController } from './car-brand.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [CarBrandController],
  providers: [CarBrandService]
})
export class CarBrandModule {}
