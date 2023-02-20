import { Module } from '@nestjs/common';
import { EvacuatorService } from './evacuator.service';
import { EvacuatorController } from './evacuator.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [EvacuatorController],
  providers: [EvacuatorService]
})
export class EvacuatorModule {}
