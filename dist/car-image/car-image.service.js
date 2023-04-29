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
exports.CarImageService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const fs = require("fs");
const utils_1 = require("../helper/utils");
let CarImageService = class CarImageService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCarImageDto) {
        let res = {};
        await this.prisma.carImage.deleteMany({
            where: {
                AND: [
                    {
                        carId: createCarImageDto[0].carId
                    },
                    {
                        OR: [
                            {
                                url: 'car_image_1.png'
                            },
                            {
                                url: 'car_image_2.png'
                            },
                            {
                                url: 'car_image_3.png'
                            }
                        ]
                    }
                ]
            }
        });
        await this.prisma.carImage.createMany({
            data: createCarImageDto
        }).then(result => {
            res = result;
        });
        return res;
    }
    async update(id, updateCarImageDto) {
        let oldData = await this.prisma.carImage.findUnique({
            where: {
                id: id
            }
        });
        if (!(0, utils_1.isNullValue)(oldData)) {
            await fs.unlink(`./upload/car/image/${oldData.url}`, () => { });
        }
        return this.prisma.carImage.update({
            where: {
                id: id,
            },
            data: updateCarImageDto
        });
    }
    async remove(id) {
        console.log(id);
        let oldData = await this.prisma.carImage.findUnique({
            where: {
                id: id
            }
        });
        if (!(0, utils_1.isNullValue)(oldData)) {
            if (oldData.url === "car_image_1.png" || oldData.url === "car_image_2.png" || oldData.url === 'car_image_3.png') { }
            else {
                await fs.unlink(`./upload/car/image/${oldData.url}`, () => { });
            }
        }
        return this.prisma.carImage.delete({
            where: {
                id: id,
            }
        });
    }
};
CarImageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarImageService);
exports.CarImageService = CarImageService;
//# sourceMappingURL=car-image.service.js.map