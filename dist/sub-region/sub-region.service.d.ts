import { CreateSubRegionDto } from './dto/create-sub-region.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class SubRegionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createSubRegionDto: CreateSubRegionDto): import(".prisma/client").Prisma.Prisma__SubRegionClient<import(".prisma/client").SubRegion, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").SubRegion[]>;
    update(id: number, updateSubRegionDto: CreateSubRegionDto): import(".prisma/client").Prisma.Prisma__SubRegionClient<import(".prisma/client").SubRegion, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__SubRegionClient<import(".prisma/client").SubRegion, never>;
}
