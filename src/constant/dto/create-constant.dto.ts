import { IsString } from "class-validator";
import { ConstantTypes } from "@prisma/client";

export class CreateConstantDto {
  @IsString()
  name_tm: string;

  @IsString()
  name_ru: string;

  @IsString()
  content_tm: string;

  @IsString()
  content_ru: string;

  @IsString()
  type: ConstantTypes;
}
