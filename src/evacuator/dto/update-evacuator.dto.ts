import { PartialType } from '@nestjs/swagger';
import { CreateEvacuatorDto } from './create-evacuator.dto';

export class UpdateEvacuatorDto extends PartialType(CreateEvacuatorDto) {}
