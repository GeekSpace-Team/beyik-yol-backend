import { CreateAdDto } from './dto/create-ad.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class AdsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(fileName: string, createAdDto: CreateAdDto): Promise<import(".prisma/client").Ads & {
        adsImage: import(".prisma/client").AdsImage[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Ads & {
        adsImage: import(".prisma/client").AdsImage[];
    })[]>;
    update(fileName: string, id: number, updateAdsDto: CreateAdDto): Promise<import(".prisma/client").Ads>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__AdsClient<import(".prisma/client").Ads, never>;
}
