import { OtherService } from './other.service';
export declare class OtherController {
    private readonly otherService;
    constructor(otherService: OtherService);
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
    getHome(req: any): Promise<{}>;
}
