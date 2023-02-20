import { Module } from '@nestjs/common';
import { SubRegionService } from './sub-region.service';
import { SubRegionController } from './sub-region.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [SubRegionController],
  providers: [SubRegionService]
})
export class SubRegionModule {}
