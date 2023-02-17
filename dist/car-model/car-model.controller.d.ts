import { CarModelService } from './car-model.service';
import { CreateCarModelDto } from './dto/create-car-model.dto';
export declare class CarModelController {
    private readonly carModelService;
    constructor(carModelService: CarModelService);
    create(createCarModelDto: CreateCarModelDto): import(".prisma/client").Prisma.Prisma__CarModelClient<import(".prisma/client").CarModel, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").CarModel[]>;
    findOne(id: string): import(".prisma/client").PrismaPromise<import(".prisma/client").CarModel[]>;
    update(id: string, updateCarModelDto: CreateCarModelDto): import(".prisma/client").Prisma.Prisma__CarModelClient<import(".prisma/client").CarModel, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__CarModelClient<import(".prisma/client").CarModel, never>;
}
