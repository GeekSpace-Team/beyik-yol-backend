import { ItemStatus } from "@prisma/client";
export declare class CreateCarModelDto {
    name: string;
    description: string;
    status: ItemStatus;
    brandId: number;
}
