import { CreateCarDto } from "./dto/create-car.dto";
import { PrismaService } from "../prisma/prisma.service";
export declare class CarsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCarDto: CreateCarDto): Promise<{}>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Car & {
        carModel: import(".prisma/client").CarModel;
        carOption: import(".prisma/client").CarOption;
        carEngineType: import(".prisma/client").CarEngine;
        carTransmition: import(".prisma/client").CarTransmition;
        images: import(".prisma/client").CarImage[];
        costFuel: import(".prisma/client").CostFuel[];
        users: import(".prisma/client").Users;
        carShare: import(".prisma/client").CarShare[];
        costRepair: import(".prisma/client").CostRepair[];
        costChange: import(".prisma/client").CostChange[];
        CarView: import(".prisma/client").CarView[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__CarClient<import(".prisma/client").Car & {
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
        carShare: import(".prisma/client").CarShare[];
        costRepair: import(".prisma/client").CostRepair[];
        costChange: import(".prisma/client").CostChange[];
        CarView: import(".prisma/client").CarView[];
    }, never>;
    update(id: number, updateCarDto: CreateCarDto): import(".prisma/client").Prisma.Prisma__CarClient<import(".prisma/client").Car, never>;
    updateUserCars(id: number, updateCarDto: CreateCarDto[]): Promise<any[]>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__CarClient<import(".prisma/client").Car, never>;
    getUserCars(id: number): Promise<(import(".prisma/client").Car & {
        carModel: import(".prisma/client").CarModel;
        carOption: import(".prisma/client").CarOption;
        carEngineType: import(".prisma/client").CarEngine;
        carTransmition: import(".prisma/client").CarTransmition;
        images: import(".prisma/client").CarImage[];
        costFuel: import(".prisma/client").CostFuel[];
        users: import(".prisma/client").Users;
        carShare: import(".prisma/client").CarShare[];
        costRepair: import(".prisma/client").CostRepair[];
        costChange: import(".prisma/client").CostChange[];
        CarView: import(".prisma/client").CarView[];
    })[]>;
    getAddCarDetails(): Promise<{}>;
}
