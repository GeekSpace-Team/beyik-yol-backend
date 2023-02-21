import { ConstantPriceType } from "@prisma/client";
import { IsNumber, IsString } from "class-validator";

export class CreatePriceDto {
  @IsString()
  title: string;

  @IsNumber()
  value: number = 0;

  type: ConstantPriceType = 'NONE';
}
