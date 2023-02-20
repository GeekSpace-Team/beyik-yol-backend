import { EvacuatorService } from './evacuator.service';
import { CreateEvacuatorDto } from './dto/create-evacuator.dto';
export declare class EvacuatorController {
    private readonly evacuatorService;
    constructor(evacuatorService: EvacuatorService);
    create(createEvacuatorDto: CreateEvacuatorDto): import(".prisma/client").Prisma.Prisma__EvacuatorClient<import(".prisma/client").Evacuator, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Evacuator & {
        subRegion: import(".prisma/client").SubRegion;
    })[]>;
    update(id: string, updateEvacuatorDto: CreateEvacuatorDto): import(".prisma/client").Prisma.Prisma__EvacuatorClient<import(".prisma/client").Evacuator, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__EvacuatorClient<import(".prisma/client").Evacuator, never>;
}
