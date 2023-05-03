import { CarsService } from "./cars.service";
import { CreateCarDto } from "./dto/create-car.dto";
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
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
    getUserCars(req: any): Promise<(import(".prisma/client").Car & {
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__CarClient<import(".prisma/client").Car & {
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
    getAddCarDetails(): Promise<{}>;
    update(id: string, updateCarDto: CreateCarDto): Promise<import(".prisma/client").Car>;
    updateUserCars(req: any, updateCarDto: CreateCarDto[]): Promise<any[]>;
    remove(id: string): Promise<import(".prisma/client").Car>;
}
