/// <reference types="multer" />
import { AdsService } from './ads.service';
import { CreateAdDto } from './dto/create-ad.dto';
export declare class AdsController {
    private readonly adsService;
    constructor(adsService: AdsService);
    create(file: Express.Multer.File, createAdDto: CreateAdDto): Promise<import(".prisma/client").Ads & {
        adsImage: import(".prisma/client").AdsImage[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Ads & {
        adsImage: import(".prisma/client").AdsImage[];
    })[]>;
    update(file: Express.Multer.File, id: string, updateAdsDto: CreateAdDto): Promise<import(".prisma/client").Ads>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__AdsClient<import(".prisma/client").Ads, never>;
}
