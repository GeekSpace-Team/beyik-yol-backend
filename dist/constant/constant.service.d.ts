import { CreateConstantDto } from './dto/create-constant.dto';
import { PrismaService } from "../prisma/prisma.service";
import { ConstantTypes } from "@prisma/client";
export declare class ConstantService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createConstantDto: CreateConstantDto): import(".prisma/client").Prisma.Prisma__ConstantsClient<import(".prisma/client").Constants, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Constants[]>;
    update(id: number, updateConstantDto: CreateConstantDto): import(".prisma/client").Prisma.Prisma__ConstantsClient<import(".prisma/client").Constants, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ConstantsClient<import(".prisma/client").Constants, never>;
    findByType(type: ConstantTypes): import(".prisma/client").Prisma.Prisma__ConstantsClient<import(".prisma/client").Constants, never>;
}
