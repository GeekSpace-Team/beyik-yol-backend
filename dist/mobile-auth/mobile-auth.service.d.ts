import { PrismaService } from "../prisma/prisma.service";
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { JwtService } from "@nestjs/jwt";
export declare class MobileAuthService {
    private readonly prisma;
    private readonly users;
    private jwtService;
    constructor(prisma: PrismaService, users: UsersService, jwtService: JwtService);
    checkExisting(phone: string): Promise<boolean>;
    checkPhoneNumber(phone: string): Promise<{
        exist: boolean;
    }>;
    sendNumber(phone: string): Promise<{
        sms_phone: string;
    }>;
    acceptPhone(phone: string): Promise<{
        number: string;
    }>;
    getToken(id: number, username: string): {
        access_token: string;
    };
    checkNumber(phone: string, uuid: string): Promise<any>;
    getProfile(id: number): Promise<import(".prisma/client").Users & {
        cars: import(".prisma/client").Car[];
        inbox: import(".prisma/client").Inbox[];
        FCMToken: import(".prisma/client").FCMToken[];
    }>;
    editProfile(id: number, body: CreateUserDto): Promise<import(".prisma/client").Users>;
    changeImage(image: string, id: number): Promise<import(".prisma/client").Users>;
}
