import { AuthService } from "./auth.service";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): Promise<import(".prisma/client").Users & {
        cars: import(".prisma/client").Car[];
        inbox: import(".prisma/client").Inbox[];
        FCMToken: import(".prisma/client").FCMToken[];
    }>;
}
