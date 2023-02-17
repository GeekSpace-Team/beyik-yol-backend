import { CreateCarEngineDto } from './dto/create-car-engine.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class CarEngineService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCarEngineDto: CreateCarEngineDto): import(".prisma/client").Prisma.Prisma__CarEngineClient<import(".prisma/client").CarEngine, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").CarEngine[]>;
    update(id: number, updateCarEngineDto: CreateCarEngineDto): import(".prisma/client").Prisma.Prisma__CarEngineClient<import(".prisma/client").CarEngine, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__CarEngineClient<import(".prisma/client").CarEngine, never>;
}
