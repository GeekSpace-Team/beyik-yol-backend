import { Module } from '@nestjs/common';
import { EvacuatorService } from './evacuator.service';
import { EvacuatorController } from './evacuator.controller';

@Module({
  controllers: [EvacuatorController],
  providers: [EvacuatorService]
})
export class EvacuatorModule {}
