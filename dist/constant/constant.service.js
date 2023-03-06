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
exports.ConstantService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ConstantService = class ConstantService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createConstantDto) {
        return this.prisma.constants.create({
            data: createConstantDto
        });
    }
    findAll() {
        return this.prisma.constants.findMany({
            orderBy: [
                {
                    createdAt: 'desc'
                }
            ]
        });
    }
    update(id, updateConstantDto) {
        return this.prisma.constants.update({
            where: { id: id },
            data: updateConstantDto
        });
    }
    remove(id) {
        return this.prisma.constants.delete({
            where: { id: id }
        });
    }
    findByType(type) {
        return this.prisma.constants.findFirst({
            where: {
                type: type
            }
        });
    }
};
ConstantService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConstantService);
exports.ConstantService = ConstantService;
//# sourceMappingURL=constant.service.js.map