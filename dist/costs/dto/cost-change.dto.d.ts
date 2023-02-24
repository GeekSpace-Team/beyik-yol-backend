import { CostType } from "@prisma/client";
export declare class CostChangeDto {
    mile: number;
    price: number;
    description: string;
    nextMile: number;
    volume: number;
    reminder: boolean;
    carId: number;
    typeIds: number[];
    costType: CostType;
}
