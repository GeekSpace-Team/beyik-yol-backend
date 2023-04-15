import { ObjectStatus, ObjectType } from "@prisma/client";
import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateObjectDto {
  @IsString()
  @IsNotEmpty()
  name_tm: string;

  @IsString()
  @IsNotEmpty()
  name_ru: string;

  @IsString()
  @IsNotEmpty()
  address_tm: string;

  @IsString()
  @IsNotEmpty()
  address_ru: string;

  @IsArray()
  phoneNumber: string[];

  image: string='';

  logo: string='';

  status: ObjectStatus='FREE';
  type: ObjectType='SERVICE';
  description_tm: string='';
  description_ru: string='';
  latitude: string='0';
  longitude: string='0';
  instagram: string='https://instagram.com';
  webUrl: string='';
  workerLimit: number=-1;
  subRegionId: number;
}
