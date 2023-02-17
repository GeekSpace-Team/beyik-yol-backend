import { IsIn, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ItemStatus } from "@prisma/client";
import { ItemStatusArray } from "../../model/item-status.model";

export class CreateCarModelDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  description: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(ItemStatusArray)
  status: ItemStatus;

  @IsNotEmpty()
  @IsNumber()
  brandId: number;

}
