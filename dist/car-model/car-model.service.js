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
exports.CarModelService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CarModelService = class CarModelService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createCarModelDto) {
        return this.prisma.carModel.create({
            data: createCarModelDto
        });
    }
    findAll() {
        return this.prisma.carModel.findMany({
            orderBy: [
                {
                    createdAt: 'desc',
                }
            ]
        });
    }
    findOne(id) {
        return this.prisma.carModel.findMany({
            where: {
                brandId: id,
            },
            orderBy: [
                {
                    createdAt: 'desc',
                }
            ]
        });
    }
    update(id, updateCarModelDto) {
        return this.prisma.carModel.update({
            where: {
                id: id,
            },
            data: updateCarModelDto
        });
    }
    remove(id) {
        return this.prisma.carModel.delete({
            where: {
                id: id,
            }
        });
    }
};
CarModelService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarModelService);
exports.CarModelService = CarModelService;
//# sourceMappingURL=car-model.service.js.map