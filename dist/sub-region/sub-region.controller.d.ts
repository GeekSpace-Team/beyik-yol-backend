import { SubRegionService } from './sub-region.service';
import { CreateSubRegionDto } from './dto/create-sub-region.dto';
export declare class SubRegionController {
    private readonly subRegionService;
    constructor(subRegionService: SubRegionService);
    create(createSubRegionDto: CreateSubRegionDto): import(".prisma/client").Prisma.Prisma__SubRegionClient<import(".prisma/client").SubRegion, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").SubRegion[]>;
    update(id: string, updateSubRegionDto: CreateSubRegionDto): import(".prisma/client").Prisma.Prisma__SubRegionClient<import(".prisma/client").SubRegion, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__SubRegionClient<import(".prisma/client").SubRegion, never>;
}
