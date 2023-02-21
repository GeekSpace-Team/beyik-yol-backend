import { PartialType } from '@nestjs/swagger';
import { CreateMobileAuthDto } from './create-mobile-auth.dto';

export class UpdateMobileAuthDto extends PartialType(CreateMobileAuthDto) {}
