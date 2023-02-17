import { CreateCarModelDto } from './dto/create-car-model.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class CarModelService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCarModelDto: CreateCarModelDto): import(".prisma/client").Prisma.Prisma__CarModelClient<import(".prisma/client").CarModel, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").CarModel[]>;
    findOne(id: number): import(".prisma/client").PrismaPromise<import(".prisma/client").CarModel[]>;
    update(id: number, updateCarModelDto: CreateCarModelDto): import(".prisma/client").Prisma.Prisma__CarModelClient<import(".prisma/client").CarModel, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__CarModelClient<import(".prisma/client").CarModel, never>;
}
