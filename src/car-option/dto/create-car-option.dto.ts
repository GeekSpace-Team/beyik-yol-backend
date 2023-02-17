import { IsIn, IsNotEmpty, IsString } from "class-validator";
import { ItemStatus } from "@prisma/client";
import { ItemStatusArray } from "../../model/item-status.model";

export class CreateCarOptionDto {
  @IsString()
  @IsNotEmpty()
  name_tm: string;

  @IsString()
  @IsNotEmpty()
  name_ru: string;

  @IsNotEmpty()
  @IsIn(ItemStatusArray)
  status: ItemStatus;

  description: string;
}
