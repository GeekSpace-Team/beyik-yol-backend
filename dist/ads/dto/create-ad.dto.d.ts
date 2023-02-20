import { ItemStatus, AdsStatus } from "@prisma/client";
export declare class CreateAdDto {
    titleTm: string;
    titleRu: string;
    index: number;
    status: ItemStatus;
    adsType: AdsStatus;
    url: string;
}
