import { IsIn, IsNotEmpty, IsString } from "class-validator";
import { ItemStatusArray } from "../../model/item-status.model";
import { ItemStatus } from "@prisma/client";

export class CreateCarTransmitionDto {
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
