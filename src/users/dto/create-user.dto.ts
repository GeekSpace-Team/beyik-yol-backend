import { UserStatus } from "@prisma/client";

export class CreateUserDto {
  fullname: string;
  phonenumber: string;
  username: string;
  password: string;
  dob: Date=new Date();
  status: UserStatus='USER';
  image: string="";
  blocked: boolean=false;
}
