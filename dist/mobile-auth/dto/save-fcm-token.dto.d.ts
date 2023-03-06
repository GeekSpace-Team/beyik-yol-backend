import { Device } from "@prisma/client";
export declare class SaveFcmTokenDto {
    userId: number;
    token: string;
    device: Device;
}
