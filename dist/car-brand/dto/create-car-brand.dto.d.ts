import { ItemStatus } from "@prisma/client";
export declare class CreateCarBrandDto {
    name: string;
    description: string;
    status: ItemStatus;
    image: string;
}
