import { MobileAuthService } from './mobile-auth.service';
import { SendNumberDto } from "./dto/send-number.dto";
export declare class MobileAuthController {
    private readonly mobileAuthService;
    constructor(mobileAuthService: MobileAuthService);
    checkNumber(phone: string): Promise<{
        exist: boolean;
    }>;
    sendNumber(body: SendNumberDto): Promise<import(".prisma/client").CheckedNumber>;
}
