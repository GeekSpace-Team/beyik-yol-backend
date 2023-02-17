import { CreateCarOptionDto } from './dto/create-car-option.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class CarOptionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCarOptionDto: CreateCarOptionDto): import(".prisma/client").Prisma.Prisma__CarOptionClient<import(".prisma/client").CarOption, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").CarOption[]>;
    update(id: number, updateCarOptionDto: CreateCarOptionDto): import(".prisma/client").Prisma.Prisma__CarOptionClient<import(".prisma/client").CarOption, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__CarOptionClient<import(".prisma/client").CarOption, never>;
}
