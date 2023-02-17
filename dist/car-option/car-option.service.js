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
exports.CarOptionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CarOptionService = class CarOptionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createCarOptionDto) {
        return this.prisma.carOption.create({
            data: createCarOptionDto
        });
    }
    findAll() {
        return this.prisma.carOption.findMany({
            orderBy: [{
                    createdAt: 'desc'
                }]
        });
    }
    update(id, updateCarOptionDto) {
        return this.prisma.carOption.update({
            where: {
                id: id
            },
            data: updateCarOptionDto
        });
    }
    remove(id) {
        return this.prisma.carOption.delete({
            where: { id: id },
        });
    }
};
CarOptionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarOptionService);
exports.CarOptionService = CarOptionService;
//# sourceMappingURL=car-option.service.js.map