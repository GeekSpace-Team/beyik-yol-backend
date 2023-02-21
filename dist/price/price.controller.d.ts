import { PriceService } from './price.service';
import { CreatePriceDto } from './dto/create-price.dto';
export declare class PriceController {
    private readonly priceService;
    constructor(priceService: PriceService);
    create(createPriceDto: CreatePriceDto): import(".prisma/client").Prisma.Prisma__ConstantPricesClient<import(".prisma/client").ConstantPrices, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").ConstantPrices[]>;
    update(id: string, updatePriceDto: CreatePriceDto): import(".prisma/client").Prisma.Prisma__ConstantPricesClient<import(".prisma/client").ConstantPrices, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ConstantPricesClient<import(".prisma/client").ConstantPrices, never>;
}
