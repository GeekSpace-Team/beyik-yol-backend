import { IsIn, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ItemStatusArray } from "../../model/item-status.model";
import { ItemStatus } from "@prisma/client";

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsIn(ItemStatusArray)
  status: ItemStatus;

  @IsNumber()
  @IsNotEmpty()
  modelId: number;

  @IsNumber()
  @IsNotEmpty()
  optionId: number;

  @IsNumber()
  @IsNotEmpty()
  engineTypeId: number;

  @IsNumber()
  @IsNotEmpty()
  enginePower: number;

  @IsNumber()
  @IsNotEmpty()
  transmitionId: number;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsNumber()
  @IsNotEmpty()
  lastMile: number;

  @IsString()
  vinCode: string;

  @IsString()
  phoneNumber: string;

  @IsNumber()
  @IsNotEmpty()
  usersId: number;


}
