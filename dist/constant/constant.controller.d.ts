import { ConstantService } from './constant.service';
import { CreateConstantDto } from './dto/create-constant.dto';
export declare class ConstantController {
    private readonly constantService;
    constructor(constantService: ConstantService);
    create(createConstantDto: CreateConstantDto): import(".prisma/client").Prisma.Prisma__ConstantsClient<import(".prisma/client").Constants, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Constants[]>;
    update(id: string, updateConstantDto: CreateConstantDto): import(".prisma/client").Prisma.Prisma__ConstantsClient<import(".prisma/client").Constants, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ConstantsClient<import(".prisma/client").Constants, never>;
}
