import { CreateCarTransmitionDto } from './dto/create-car-transmition.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class CarTransmitionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCarTransmitionDto: CreateCarTransmitionDto): import(".prisma/client").Prisma.Prisma__CarTransmitionClient<import(".prisma/client").CarTransmition, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").CarTransmition[]>;
    update(id: number, updateCarTransmitionDto: CreateCarTransmitionDto): import(".prisma/client").Prisma.Prisma__CarTransmitionClient<import(".prisma/client").CarTransmition, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__CarTransmitionClient<import(".prisma/client").CarTransmition, never>;
}
