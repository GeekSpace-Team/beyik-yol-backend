import { CreateCarDto } from './dto/create-car.dto';
import { PrismaService } from "../prisma/prisma.service";
export declare class CarsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCarDto: CreateCarDto): import(".prisma/client").Prisma.Prisma__CarClient<import(".prisma/client").Car, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Car & {
        users: import(".prisma/client").Users;
        carModel: import(".prisma/client").CarModel;
        carOption: import(".prisma/client").CarOption;
        carEngineType: import(".prisma/client").CarEngine;
        carTransmition: import(".prisma/client").CarTransmition;
        images: import(".prisma/client").CarImage[];
        costFuel: import(".prisma/client").CostFuel[];
        carShare: import(".prisma/client").CarShare[];
        costRepair: import(".prisma/client").CostRepair[];
        costChange: import(".prisma/client").CostChange[];
        CarView: import(".prisma/client").CarView[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__CarClient<import(".prisma/client").Car & {
        users: import(".prisma/client").Users;
        carModel: import(".prisma/client").CarModel;
        carOption: import(".prisma/client").CarOption;
        carEngineType: import(".prisma/client").CarEngine;
        carTransmition: import(".prisma/client").CarTransmition;
        images: import(".prisma/client").CarImage[];
        costFuel: import(".prisma/client").CostFuel[];
        carShare: import(".prisma/client").CarShare[];
        costRepair: import(".prisma/client").CostRepair[];
        costChange: import(".prisma/client").CostChange[];
        CarView: import(".prisma/client").CarView[];
    }, never>;
    update(id: number, updateCarDto: CreateCarDto): import(".prisma/client").Prisma.Prisma__CarClient<import(".prisma/client").Car, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__CarClient<import(".prisma/client").Car, never>;
}
