import { CarTransmitionService } from './car-transmition.service';
import { CreateCarTransmitionDto } from './dto/create-car-transmition.dto';
export declare class CarTransmitionController {
    private readonly carTransmitionService;
    constructor(carTransmitionService: CarTransmitionService);
    create(createCarTransmitionDto: CreateCarTransmitionDto): import(".prisma/client").Prisma.Prisma__CarTransmitionClient<import(".prisma/client").CarTransmition, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").CarTransmition[]>;
    update(id: string, updateCarTransmitionDto: CreateCarTransmitionDto): import(".prisma/client").Prisma.Prisma__CarTransmitionClient<import(".prisma/client").CarTransmition, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__CarTransmitionClient<import(".prisma/client").CarTransmition, never>;
}
