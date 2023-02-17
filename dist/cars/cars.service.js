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
let CarsService = class CarsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createCarDto) {
        return this.prisma.car.create({
            data: createCarDto
        });
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
    update(id, updateCarDto) {
        return this.prisma.car.update({
            data: updateCarDto,
            where: {
                id: id
            }
        });
    }
    remove(id) {
        return this.prisma.car.delete({
            where: {
                id: id
            }
        });
    }
};
CarsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=cars.service.js.map