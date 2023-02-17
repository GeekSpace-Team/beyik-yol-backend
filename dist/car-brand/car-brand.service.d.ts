import { CreateCarBrandDto } from "./dto/create-car-brand.dto";
import { PrismaService } from "../prisma/prisma.service";
export declare class CarBrandService {
    private prisma;
    constructor(prisma: PrismaService);
    create(fileName: string, createCarBrandDto: CreateCarBrandDto): import(".prisma/client").Prisma.Prisma__CarBrandClient<import(".prisma/client").CarBrand, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").CarBrand & {
        models: import(".prisma/client").CarModel[];
    })[]>;
    findOne(id: number): string;
    update(fileName: string, id: number, updateCarBrandDto: CreateCarBrandDto): Promise<import(".prisma/client").CarBrand>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__CarBrandClient<import(".prisma/client").CarBrand, never>;
}
