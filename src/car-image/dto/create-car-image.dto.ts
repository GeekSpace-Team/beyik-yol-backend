import { IsIn, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ItemStatusArray } from "../../model/item-status.model";
import { ItemStatus, ImageType } from "@prisma/client";

export class CreateCarImageDto {

  @IsString()
  url: string;

  @IsNotEmpty()
  @IsIn(ItemStatusArray)
  status: ItemStatus;

  @IsString()
  @IsNotEmpty()
  type: ImageType;

  @IsNotEmpty()
  carId: number;

}
