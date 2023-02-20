import { ImageType, ItemStatus } from "@prisma/client";

export class CreateAdImageDto {
  url: string;
  type: ImageType='NONE';
  status: ItemStatus='ACTIVE';
  adsId: number;
}