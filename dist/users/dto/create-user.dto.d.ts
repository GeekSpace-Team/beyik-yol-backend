import { UserStatus } from "@prisma/client";
export declare class CreateUserDto {
    fullname: string;
    phonenumber: string;
    username: string;
    password: string;
    dob: Date;
    status: UserStatus;
    image: string;
    blocked: boolean;
}
