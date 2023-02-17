import { ItemStatus, ImageType } from "@prisma/client";
export declare class CreateCarImageDto {
    url: string;
    status: ItemStatus;
    type: ImageType;
    carId: number;
}
