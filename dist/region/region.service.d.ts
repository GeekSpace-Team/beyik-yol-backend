import { CreateRegionDto } from './dto/create-region.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class RegionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createRegionDto: CreateRegionDto): import(".prisma/client").Prisma.Prisma__RegionClient<import(".prisma/client").Region, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Region & {
        subRegion: import(".prisma/client").SubRegion[];
    })[]>;
    update(id: number, updateRegionDto: CreateRegionDto): import(".prisma/client").Prisma.Prisma__RegionClient<import(".prisma/client").Region, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__RegionClient<import(".prisma/client").Region, never>;
}
