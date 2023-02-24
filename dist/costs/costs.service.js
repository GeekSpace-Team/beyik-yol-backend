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
exports.CostsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const utils_1 = require("../helper/utils");
const cost_to_type_dto_1 = require("./dto/cost-to-type.dto");
let CostsService = class CostsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createChange(createCostDto) {
        let ids = createCostDto.typeIds;
        delete createCostDto.typeIds;
        let res;
        await this.prisma.costChange.create({
            data: createCostDto
        }).then(result => {
            res = result;
        }).catch(err => {
            throw new common_1.HttpException(err.toString(), common_1.HttpStatus.FORBIDDEN);
        });
        let costToType = ids.map(id => {
            let cc = new cost_to_type_dto_1.CostToTypeDto();
            cc.costId = res.id;
            cc.typeId = id;
            return cc;
        });
        await this.prisma.costToType.createMany({
            data: costToType
        });
        return this.prisma.costChange.findUnique({
            where: { id: res.id },
            include: {
                CostToType: true,
                car: true
            }
        });
    }
    async getByCarId(id, type) {
        let typeCondition = {};
        if (!(0, utils_1.isNullValue)(type)) {
            typeCondition = {
                costType: type
            };
        }
        let condition = Object.assign({ carId: id }, typeCondition);
        return this.prisma.costChange.findMany({
            where: condition,
            orderBy: [
                {
                    createdAt: 'desc'
                }
            ],
            include: {
                car: true,
                CostToType: {
                    include: {
                        changeType: true
                    }
                }
            }
        });
    }
    async updateCost(id, createCostDto) {
        let ids = createCostDto.typeIds;
        delete createCostDto.typeIds;
        let res;
        await this.prisma.costChange.update({
            where: { id: id },
            data: createCostDto
        }).then(result => {
            res = result;
        }).catch(err => {
            throw new common_1.HttpException(err.toString(), common_1.HttpStatus.FORBIDDEN);
        });
        if (!(0, utils_1.isNullValue)(ids) && ids.length > 0) {
            await this.prisma.costToType.deleteMany({
                where: { costId: id }
            });
            let costToType = ids.map(id => {
                let cc = new cost_to_type_dto_1.CostToTypeDto();
                cc.costId = res.id;
                cc.typeId = id;
                return cc;
            });
            await this.prisma.costToType.createMany({
                data: costToType
            });
        }
        return this.prisma.costChange.findUnique({
            where: { id: res.id },
            include: {
                CostToType: true,
                car: true
            }
        });
    }
    deleteCost(id) {
        return this.prisma.costChange.delete({
            where: { id: id }
        });
    }
};
CostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CostsService);
exports.CostsService = CostsService;
//# sourceMappingURL=costs.service.js.map