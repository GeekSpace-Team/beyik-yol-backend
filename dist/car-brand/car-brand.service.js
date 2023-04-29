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
exports.CarBrandService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const utils_1 = require("../helper/utils");
const fs = require("fs");
let CarBrandService = class CarBrandService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(fileName, createCarBrandDto) {
        createCarBrandDto.image = fileName;
        return this.prisma.carBrand.create({
            data: createCarBrandDto
        });
    }
    findAll() {
        return this.prisma.carBrand.findMany({
            orderBy: [
                {
                    name: 'asc'
                }
            ],
            include: {
                models: true
            }
        });
    }
    findOne(id) {
        return `This action returns a #${id} carBrand`;
    }
    async update(fileName, id, updateCarBrandDto) {
        let oldData = await this.prisma.carBrand.findUnique({
            where: {
                id: id,
            }
        });
        if ((0, utils_1.isNullValue)(fileName)) {
            fileName = oldData.image;
        }
        else {
            await fs.unlink(`./upload/car/car-brand/${oldData.image}`, () => { });
        }
        updateCarBrandDto.image = fileName;
        return await this.prisma.carBrand.update({
            where: {
                id: id,
            },
            data: updateCarBrandDto
        });
    }
    remove(id) {
        try {
            return this.prisma.carBrand.delete({
                where: {
                    id: id
                }
            });
        }
        catch (err) {
            throw new common_1.BadRequestException();
        }
    }
};
CarBrandService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarBrandService);
exports.CarBrandService = CarBrandService;
//# sourceMappingURL=car-brand.service.js.map