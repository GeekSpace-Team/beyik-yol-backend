import { IsIn, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ItemStatusArray } from "../../model/item-status.model";
import { ItemStatus, AdsStatus } from "@prisma/client";

export class CreateAdDto {
  @IsString()
  @IsNotEmpty()
  titleTm: string;

  @IsString()
  @IsNotEmpty()
  titleRu: string;

  index: number;

  @IsIn(ItemStatusArray)
  status: ItemStatus;

  adsType: AdsStatus;

  @IsString()
  url: string;
}
