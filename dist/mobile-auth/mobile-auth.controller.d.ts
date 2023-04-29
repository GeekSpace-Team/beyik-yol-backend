/// <reference types="multer" />
import { MobileAuthService } from './mobile-auth.service';
import { SendNumberDto } from "./dto/send-number.dto";
import { CheckCodeDto } from "./dto/check-code.dto";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { SaveFcmTokenDto } from "./dto/save-fcm-token.dto";
export declare class MobileAuthController {
    private readonly mobileAuthService;
    constructor(mobileAuthService: MobileAuthService);
    checkNumber(phone: string): Promise<{
        exist: boolean;
    }>;
    sendNumber(body: SendNumberDto): Promise<{
        sms_phone: string;
    }>;
    acceptNumber(body: SendNumberDto): Promise<{
        number: string;
    }>;
    checkCode(body: CheckCodeDto): Promise<any>;
    getProfile(req: any): Promise<{}>;
    editProfile(req: any, body: CreateUserDto): Promise<import(".prisma/client").Users>;
    changeImage(file: Express.Multer.File, req: any): Promise<import(".prisma/client").Users>;
    saveFcmToken(req: any, body: SaveFcmTokenDto): Promise<{}>;
}
