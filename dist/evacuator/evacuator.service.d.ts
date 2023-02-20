import { CreateEvacuatorDto } from './dto/create-evacuator.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class EvacuatorService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createEvacuatorDto: CreateEvacuatorDto): import(".prisma/client").Prisma.Prisma__EvacuatorClient<import(".prisma/client").Evacuator, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Evacuator[]>;
    update(id: number, updateEvacuatorDto: CreateEvacuatorDto): import(".prisma/client").Prisma.Prisma__EvacuatorClient<import(".prisma/client").Evacuator, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__EvacuatorClient<import(".prisma/client").Evacuator, never>;
}
