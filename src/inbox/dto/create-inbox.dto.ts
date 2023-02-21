import { IsString } from "class-validator";

export class CreateInboxDto {
  @IsString()
  titleTm: string;

  @IsString()
  titleRu: string;

  @IsString()
  messageTm: string;

  @IsString()
  messageRu: string;

  userId: number = null;

  isRead: boolean = false;

  url: string;


}
