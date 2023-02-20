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
exports.EvacuatorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EvacuatorService = class EvacuatorService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createEvacuatorDto) {
        return this.prisma.evacuator.create({
            data: createEvacuatorDto
        });
    }
    findAll() {
        return this.prisma.evacuator.findMany({
            orderBy: [
                {
                    createdAt: 'desc'
                }
            ],
            include: {
                subRegion: true
            }
        });
    }
    update(id, updateEvacuatorDto) {
        return this.prisma.evacuator.update({
            where: { id: id },
            data: updateEvacuatorDto
        });
    }
    remove(id) {
        return this.prisma.evacuator.delete({
            where: { id: id }
        });
    }
};
EvacuatorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EvacuatorService);
exports.EvacuatorService = EvacuatorService;
//# sourceMappingURL=evacuator.service.js.map