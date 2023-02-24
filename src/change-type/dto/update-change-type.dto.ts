import { PartialType } from '@nestjs/swagger';
import { CreateChangeTypeDto } from './create-change-type.dto';

export class UpdateChangeTypeDto extends PartialType(CreateChangeTypeDto) {}
