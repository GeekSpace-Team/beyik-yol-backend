import { PrismaService } from "../prisma/prisma.service";
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { JwtService } from "@nestjs/jwt";
import { SaveFcmTokenDto } from "./dto/save-fcm-token.dto";
import { InboxService } from "../inbox/inbox.service";
export declare class MobileAuthService {
    private readonly prisma;
    private readonly users;
    private jwtService;
    private readonly inbox;
    constructor(prisma: PrismaService, users: UsersService, jwtService: JwtService, inbox: InboxService);
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
    getProfile(id: number): Promise<{}>;
    editProfile(id: number, body: CreateUserDto): Promise<import(".prisma/client").Users>;
    changeImage(image: string, id: number): Promise<import(".prisma/client").Users>;
    saveFcmToken(id: number, body: SaveFcmTokenDto): Promise<{}>;
}
