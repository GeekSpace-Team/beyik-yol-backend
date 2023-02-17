import { ItemStatus } from "@prisma/client";
export declare class CreateCarEngineDto {
    name_tm: string;
    name_ru: string;
    status: ItemStatus;
    description: string;
}
