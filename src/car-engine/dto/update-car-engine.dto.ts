import { PartialType } from '@nestjs/swagger';
import { CreateCarEngineDto } from './create-car-engine.dto';

export class UpdateCarEngineDto extends PartialType(CreateCarEngineDto) {}
