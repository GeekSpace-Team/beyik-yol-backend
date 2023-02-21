import { CreatePriceDto } from './dto/create-price.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class PriceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPriceDto: CreatePriceDto): import(".prisma/client").Prisma.Prisma__ConstantPricesClient<import(".prisma/client").ConstantPrices, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").ConstantPrices[]>;
    update(id: number, updatePriceDto: CreatePriceDto): import(".prisma/client").Prisma.Prisma__ConstantPricesClient<import(".prisma/client").ConstantPrices, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ConstantPricesClient<import(".prisma/client").ConstantPrices, never>;
}
