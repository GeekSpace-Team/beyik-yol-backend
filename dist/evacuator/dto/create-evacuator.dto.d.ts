import { ItemStatus } from "@prisma/client";
export declare class CreateEvacuatorDto {
    phoneNumber: string;
    subRegionId: number;
    status: ItemStatus;
    description: string;
}
