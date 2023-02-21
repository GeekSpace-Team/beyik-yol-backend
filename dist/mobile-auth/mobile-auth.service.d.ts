import { PrismaService } from "../prisma/prisma.service";
export declare class MobileAuthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    checkExisting(phone: string): Promise<boolean>;
    checkPhoneNumber(phone: string): Promise<{
        exist: boolean;
    }>;
    sendNumber(phone: string): Promise<import(".prisma/client").CheckedNumber>;
}
