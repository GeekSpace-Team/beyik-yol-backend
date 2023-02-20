import { IsNotEmpty, IsString } from "class-validator";

export class CreateRegionDto {
  @IsString()
  @IsNotEmpty()
  name_tm: string;

  @IsString()
  @IsNotEmpty()
  name_ru: string;

  @IsString()
  description: string;
}
