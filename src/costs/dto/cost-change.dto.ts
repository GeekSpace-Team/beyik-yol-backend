import { CostType } from "@prisma/client";

export class CostChangeDto {
  mile: number=0;
  price: number=0;
  description: string="";
  nextMile: number=0;
  volume: number=0;
  reminder: boolean=false;
  carId: number;
  typeIds: number[]=null;
  costType: CostType;
}