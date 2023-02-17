import { IsIn, IsNotEmpty, IsString } from "class-validator";
import { ItemStatusArray } from "../../model/item-status.model";
import { ItemStatus } from "@prisma/client";

export class CreateEvacuatorDto {
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsNotEmpty()
  subRegionId: number;

  @IsNotEmpty()
  @IsIn(ItemStatusArray)
  status: ItemStatus;

  description: string;

}
