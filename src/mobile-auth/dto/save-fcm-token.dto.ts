import { Device } from "@prisma/client";

export class SaveFcmTokenDto {
  userId: number=0;
  token: string;
  device: Device = "ANDROID";
}