"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const create_car_image_dto_1 = require("../car-image/dto/create-car-image.dto");
const utils_1 = require("../helper/utils");
let CarsService = class CarsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCarDto) {
        let res = {};
        let image = new create_car_image_dto_1.CreateCarImageDto();
        await this.prisma.car.create({
            data: createCarDto
        }).then(result => {
            res = result;
            image.carId = result.id;
            image.url = `car_image_${(0, utils_1.randomIntFromInterval)(1, 3)}.png`;
            image.status = 'ACTIVE';
            image.type = 'NONE';
        });
        await this.prisma.carImage.create({
            data: image
        }).then(result => { });
        return res;
    }
    findAll() {
        return this.prisma.car.findMany({
            orderBy: [
                {
                    createdAt: 'desc'
                }
            ],
            include: {
                images: true,
                carModel: true,
                carTransmition: true,
                carOption: true,
                carEngineType: true,
                carShare: true,
                users: true,
                costFuel: true,
                costChange: true,
                costRepair: true,
                CarView: true
            }
        });
    }
    findOne(id) {
        return this.prisma.car.findFirst({
            where: {
                id: id
            },
            include: {
                images: true,
                carModel: {
                    include: {
                        brand: {
                            include: {
                                models: true
                            }
                        }
                    }
                },
                carTransmition: true,
                carOption: true,
                carEngineType: true,
                carShare: true,
                users: true,
                costFuel: true,
                costChange: true,
                costRepair: true,
                CarView: true
            }
        });
    }
    update(id, updateCarDto) {
        return this.prisma.car.update({
            data: updateCarDto,
            where: {
                id: id
            }
        });
    }
    async updateUserCars(id, updateCarDto) {
        let result = [];
        for (const car of updateCarDto) {
            const i = updateCarDto.indexOf(car);
            await this.prisma.car.upsert({
                where: {
                    uuid: car.uuid,
                },
                update: car,
                create: car
            }).then(res => {
                result.push(res);
            });
        }
        return result;
    }
    remove(id) {
        return this.prisma.car.delete({
            where: {
                id: id
            }
        });
    }
    async getUserCars(id) {
        return this.prisma.car.findMany({
            where: {
                usersId: id
            },
            include: {
                images: true,
                carModel: true,
                carTransmition: true,
                carOption: true,
                carEngineType: true,
                carShare: true,
                users: true,
                costFuel: true,
                costChange: true,
                costRepair: true,
                CarView: true
            }
        });
    }
    async getAddCarDetails() {
        let res = {};
        await this.prisma.carBrand.findMany({ include: { models: true } })
            .then(result => {
            res = Object.assign(Object.assign({}, res), { brand: result });
        });
        await this.prisma.carOption.findMany()
            .then(result => {
            res = Object.assign(Object.assign({}, res), { option: result });
        });
        await this.prisma.carTransmition.findMany()
            .then(result => {
            res = Object.assign(Object.assign({}, res), { transmition: result });
        });
        await this.prisma.carEngine.findMany()
            .then(result => {
            res = Object.assign(Object.assign({}, res), { engine: result });
        });
        return res;
    }
};
CarsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=cars.service.js.map