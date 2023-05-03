import { AuthService } from "../auth/auth.service";
import { PrismaService } from "../prisma/prisma.service";
import { CarsService } from "../cars/cars.service";
export declare class OtherService {
    private readonly prisma;
    private readonly auth;
    private readonly carService;
    constructor(prisma: PrismaService, auth: AuthService, carService: CarsService);
    findAll(): {
        device: string[];
        loginType: string[];
        eventType: string[];
        pageType: string[];
        priceType: string[];
        objectPermissions: string[];
        adsStatus: string[];
        itemStatus: string[];
        userStatus: string[];
        objectStatus: string[];
        objectType: string[];
        imageType: string[];
        permissions: string[];
        constantType: string[];
        costType: string[];
    };
    getHome(token: string, isSend?: Boolean): Promise<{}>;
}
