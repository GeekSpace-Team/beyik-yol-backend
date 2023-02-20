import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
export declare class RegionController {
    private readonly regionService;
    constructor(regionService: RegionService);
    create(createRegionDto: CreateRegionDto): import(".prisma/client").Prisma.Prisma__RegionClient<import(".prisma/client").Region, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Region & {
        subRegion: import(".prisma/client").SubRegion[];
    })[]>;
    update(id: string, updateRegionDto: CreateRegionDto): import(".prisma/client").Prisma.Prisma__RegionClient<import(".prisma/client").Region, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__RegionClient<import(".prisma/client").Region, never>;
}
