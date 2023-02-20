import { ImageType, ItemStatus } from "@prisma/client";
export declare class CreateAdImageDto {
    url: string;
    type: ImageType;
    status: ItemStatus;
    adsId: number;
}
