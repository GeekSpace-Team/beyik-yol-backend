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
const create_inbox_dto_1 = require("../inbox/dto/create-inbox.dto");
const inbox_service_1 = require("../inbox/inbox.service");
let CarsService = class CarsService {
    constructor(prisma, inbox) {
        this.prisma = prisma;
        this.inbox = inbox;
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
        let i = new create_inbox_dto_1.CreateInboxDto();
        i.userId = createCarDto.usersId;
        i.messageTm = `Täze ${createCarDto.name} atly ulag döredildi!`;
        i.messageRu = `Создан новый автомобиль под названием «${createCarDto.name}».!`;
        i.titleTm = '🔔Täze ulag döredildi🚗';
        i.titleRu = `🔔Создан новый автомобиль🚗`;
        i.url = '';
        await this.inbox.sendToUser(i);
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
    async update(id, updateCarDto) {
        let i = new create_inbox_dto_1.CreateInboxDto();
        i.userId = updateCarDto.usersId;
        i.messageTm = `${updateCarDto.name} atly ulag üýtgedildi!`;
        i.messageRu = `Автомобиль с именем "${updateCarDto.name}" был изменен!`;
        i.titleTm = '🔔Ulag üýtgedildi🚗';
        i.titleRu = `🔔Автомобиль был модифицирован🚗`;
        i.url = '';
        await this.inbox.sendToUser(i);
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
    async remove(id) {
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
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, inbox_service_1.InboxService])
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=cars.service.js.map