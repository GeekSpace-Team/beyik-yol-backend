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
const notification_service_1 = require("../notification/notification.service");
const notification_dto_1 = require("../notification/dto/notification.dto");
const client_1 = require("@prisma/client");
const create_inbox_dto_1 = require("../inbox/dto/create-inbox.dto");
const inbox_service_1 = require("../inbox/inbox.service");
let CostsService = class CostsService {
    constructor(prisma, notification, inbox) {
        this.prisma = prisma;
        this.notification = notification;
        this.inbox = inbox;
    }
    async createChange(createCostDto, userId) {
        let ids = createCostDto.typeIds;
        delete createCostDto.typeIds;
        let res;
        const condition = {
            reminder: true,
            costType: client_1.CostType.CHANGE,
            carId: createCostDto.carId,
            nextMile: {
                lte: createCostDto.mile
            }
        };
        await this.prisma.costChange.findFirst({
            where: condition,
            orderBy: [
                {
                    createdAt: 'desc'
                }
            ]
        }).then(async (result) => {
            if (result != null) {
                if (typeof result.id !== 'undefined' && result.id != null) {
                    let payload = new notification_dto_1.NotificationDto();
                    payload.url = "";
                    payload.body_tm = `Çalyşma wagty boldy!`;
                    payload.body_ru = `Пришло время перемен!`;
                    payload.title_ru = `Пришло время перемен!`;
                    payload.title_tm = `Çalyşma wagty boldy!`;
                    await this.prisma.fCMToken.findMany({
                        where: {
                            NOT: [
                                { token: undefined }
                            ],
                            AND: [
                                {
                                    userId: userId
                                }
                            ]
                        }
                    }).then(async (result) => {
                        await this.notification.sendToAll(payload, result.map(item => item.token));
                    });
                    await this.prisma.costChange.updateMany({
                        where: {
                            carId: createCostDto.carId
                        },
                        data: {
                            reminder: false
                        }
                    });
                }
            }
        });
        await this.prisma.car.update({
            data: {
                lastMile: createCostDto.mile
            },
            where: {
                id: createCostDto.carId
            }
        });
        await this.prisma.costChange.create({
            data: createCostDto
        }).then(result => {
            res = result;
        }).catch(err => {
            throw new common_1.HttpException(err.toString(), common_1.HttpStatus.FORBIDDEN);
        });
        await this.prisma.costChange.updateMany({
            where: condition,
            data: {
                reminder: false
            }
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
        let i = new create_inbox_dto_1.CreateInboxDto();
        i.userId = userId;
        i.messageTm = `Geçen ýoly ${createCostDto.mile} km!`;
        i.messageRu = `Проезд автомобиля ${createCostDto.mile} km`;
        i.titleTm = '🔔Çykdaýjy hasaba alyndy💹🚗';
        i.titleRu = `🔔Стоимость создана🚗`;
        i.url = '';
        await this.inbox.sendToUser(i);
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
        await this.prisma.car.findUnique({
            where: {
                id: createCostDto.carId
            }
        }).then(async (result) => {
            if (result.lastMile < createCostDto.mile) {
                await this.prisma.car.update({
                    data: {
                        lastMile: createCostDto.mile
                    },
                    where: {
                        id: createCostDto.carId
                    }
                });
            }
        });
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
    getById(id) {
        return this.prisma.costChange.findUnique({
            where: {
                id: id
            },
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
};
CostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, notification_service_1.NotificationsService, inbox_service_1.InboxService])
], CostsService);
exports.CostsService = CostsService;
//# sourceMappingURL=costs.service.js.map