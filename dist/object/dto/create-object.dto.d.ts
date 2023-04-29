import { ObjectStatus, ObjectType } from "@prisma/client";
export declare class CreateObjectDto {
    name_tm: string;
    name_ru: string;
    address_tm: string;
    address_ru: string;
    phoneNumber: string[];
    image: string;
    logo: string;
    status: ObjectStatus;
    type: ObjectType;
    description_tm: string;
    description_ru: string;
    latitude: string;
    longitude: string;
    instagram: string;
    webUrl: string;
    workerLimit: number;
    subRegionId: number;
}
