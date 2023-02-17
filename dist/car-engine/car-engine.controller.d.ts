import { CarEngineService } from './car-engine.service';
import { CreateCarEngineDto } from './dto/create-car-engine.dto';
export declare class CarEngineController {
    private readonly carEngineService;
    constructor(carEngineService: CarEngineService);
    create(createCarEngineDto: CreateCarEngineDto): import(".prisma/client").Prisma.Prisma__CarEngineClient<import(".prisma/client").CarEngine, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").CarEngine[]>;
    update(id: string, updateCarEngineDto: CreateCarEngineDto): import(".prisma/client").Prisma.Prisma__CarEngineClient<import(".prisma/client").CarEngine, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__CarEngineClient<import(".prisma/client").CarEngine, never>;
}
