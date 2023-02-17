import { ItemStatus } from "@prisma/client";
import { IsString, IsIn, IsNotEmpty } from "class-validator";
import { ItemStatusArray } from "../../model/item-status.model";

export class CreateCarBrandDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(ItemStatusArray)
  status: ItemStatus;

  image: string;
}
