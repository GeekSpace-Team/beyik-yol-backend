import { Module } from '@nestjs/common';
import { CarImageService } from './car-image.service';
import { CarImageController } from './car-image.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [CarImageController],
  providers: [CarImageService]
})
export class CarImageModule {}
