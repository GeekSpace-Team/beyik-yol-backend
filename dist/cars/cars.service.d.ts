import { CreateCarDto } from "./dto/create-car.dto";
import { PrismaService } from "../prisma/prisma.service";
export declare class CarsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCarDto: CreateCarDto): import(".prisma/client").Prisma.Prisma__CarClient<import(".prisma/client").Car, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Car & {
        carShare: import(".prisma/client").CarShare[];
        CarView: import(".prisma/client").CarView[];
        carModel: import(".prisma/client").CarModel;
        carOption: import(".prisma/client").CarOption;
        carEngineType: import(".prisma/client").CarEngine;
        carTransmition: import(".prisma/client").CarTransmition;
        images: import(".prisma/client").CarImage[];
        costFuel: import(".prisma/client").CostFuel[];
        users: import(".prisma/client").Users;
        costRepair: import(".prisma/client").CostRepair[];
        costChange: import(".prisma/client").CostChange[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__CarClient<import(".prisma/client").Car & {
        carShare: import(".prisma/client").CarShare[];
        CarView: import(".prisma/client").CarView[];
        carModel: import(".prisma/client").CarModel & {
            brand: import(".prisma/client").CarBrand & {
                models: import(".prisma/client").CarModel[];
            };
        };
        carOption: import(".prisma/client").CarOption;
        carEngineType: import(".prisma/client").CarEngine;
        carTransmition: import(".prisma/client").CarTransmition;
        images: import(".prisma/client").CarImage[];
        costFuel: import(".prisma/client").CostFuel[];
        users: import(".prisma/client").Users;
        costRepair: import(".prisma/client").CostRepair[];
        costChange: import(".prisma/client").CostChange[];
    }, never>;
    update(id: number, updateCarDto: CreateCarDto): import(".prisma/client").Prisma.Prisma__CarClient<import(".prisma/client").Car, never>;
    updateUserCars(id: number, updateCarDto: CreateCarDto[]): Promise<any[]>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__CarClient<import(".prisma/client").Car, never>;
    getUserCars(id: number): Promise<(import(".prisma/client").Car & {
        carShare: import(".prisma/client").CarShare[];
        CarView: import(".prisma/client").CarView[];
        carModel: import(".prisma/client").CarModel;
        carOption: import(".prisma/client").CarOption;
        carEngineType: import(".prisma/client").CarEngine;
        carTransmition: import(".prisma/client").CarTransmition;
        images: import(".prisma/client").CarImage[];
        costFuel: import(".prisma/client").CostFuel[];
        users: import(".prisma/client").Users;
        costRepair: import(".prisma/client").CostRepair[];
        costChange: import(".prisma/client").CostChange[];
    })[]>;
    getAddCarDetails(): Promise<{}>;
}
