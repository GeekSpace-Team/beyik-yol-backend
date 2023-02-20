import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSubRegionDto {
  @IsString()
  @IsNotEmpty()
  name_tm: string;

  @IsString()
  @IsNotEmpty()
  name_ru: string;

  @IsString()
  description: string;

  @IsNumber()
  regionId: number;
}
