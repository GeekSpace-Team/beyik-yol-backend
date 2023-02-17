/// <reference types="multer" />
import { CarBrandService } from "./car-brand.service";
import { CreateCarBrandDto } from "./dto/create-car-brand.dto";
export declare class CarBrandController {
    private readonly carBrandService;
    constructor(carBrandService: CarBrandService);
    create(file: Express.Multer.File, createCarBrandDto: CreateCarBrandDto): import(".prisma/client").Prisma.Prisma__CarBrandClient<import(".prisma/client").CarBrand, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").CarBrand & {
        models: import(".prisma/client").CarModel[];
    })[]>;
    update(file: Express.Multer.File, id: string, updateCarBrandDto: CreateCarBrandDto): Promise<import(".prisma/client").CarBrand>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__CarBrandClient<import(".prisma/client").CarBrand, never>;
}
