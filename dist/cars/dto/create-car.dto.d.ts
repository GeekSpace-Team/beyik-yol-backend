import { ItemStatus } from "@prisma/client";
export declare class CreateCarDto {
    name: string;
    status: ItemStatus;
    modelId: number;
    optionId: number;
    engineTypeId: number;
    enginePower: number;
    transmitionId: number;
    year: number;
    lastMile: number;
    vinCode: string;
    phoneNumber: string;
    usersId: number;
}
