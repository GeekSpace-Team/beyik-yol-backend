import { ItemStatus } from "@prisma/client";
export declare class CreateCarOptionDto {
    name_tm: string;
    name_ru: string;
    status: ItemStatus;
    description: string;
}
