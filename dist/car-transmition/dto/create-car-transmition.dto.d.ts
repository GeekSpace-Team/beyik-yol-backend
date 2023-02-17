import { ItemStatus } from "@prisma/client";
export declare class CreateCarTransmitionDto {
    name_tm: string;
    name_ru: string;
    status: ItemStatus;
    description: string;
}
