import { PartialType } from '@nestjs/swagger';
import { CreateCarOptionDto } from './create-car-option.dto';

export class UpdateCarOptionDto extends PartialType(CreateCarOptionDto) {}
