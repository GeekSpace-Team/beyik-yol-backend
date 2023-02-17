import { CarOptionService } from './car-option.service';
import { CreateCarOptionDto } from './dto/create-car-option.dto';
export declare class CarOptionController {
    private readonly carOptionService;
    constructor(carOptionService: CarOptionService);
    create(createCarOptionDto: CreateCarOptionDto): import(".prisma/client").Prisma.Prisma__CarOptionClient<import(".prisma/client").CarOption, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").CarOption[]>;
    update(id: string, updateCarOptionDto: CreateCarOptionDto): import(".prisma/client").Prisma.Prisma__CarOptionClient<import(".prisma/client").CarOption, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__CarOptionClient<import(".prisma/client").CarOption, never>;
}
