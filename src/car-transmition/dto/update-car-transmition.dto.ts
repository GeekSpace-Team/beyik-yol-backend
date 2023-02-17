import { PartialType } from '@nestjs/swagger';
import { CreateCarTransmitionDto } from './create-car-transmition.dto';

export class UpdateCarTransmitionDto extends PartialType(CreateCarTransmitionDto) {}
