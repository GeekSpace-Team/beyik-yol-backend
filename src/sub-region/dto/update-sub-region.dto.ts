import { PartialType } from '@nestjs/swagger';
import { CreateSubRegionDto } from './create-sub-region.dto';

export class UpdateSubRegionDto extends PartialType(CreateSubRegionDto) {}
