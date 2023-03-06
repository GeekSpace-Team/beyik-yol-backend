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
exports.OtherService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const auth_service_1 = require("../auth/auth.service");
const prisma_service_1 = require("../prisma/prisma.service");
const cars_service_1 = require("../cars/cars.service");
let OtherService = class OtherService {
    constructor(prisma, auth, carService) {
        this.prisma = prisma;
        this.auth = auth;
        this.carService = carService;
    }
    findAll() {
        return {
            device: Object.keys(client_1.Device),
            loginType: Object.keys(client_1.LoginLogType),
            eventType: Object.keys(client_1.EventType),
            pageType: Object.keys(client_1.PageType),
            priceType: Object.keys(client_1.ConstantPriceType),
            objectPermissions: Object.keys(client_1.ObjectPermissions),
            adsStatus: Object.keys(client_1.AdsStatus),
            itemStatus: Object.keys(client_1.ItemStatus),
            userStatus: Object.keys(client_1.UserStatus),
            objectStatus: Object.keys(client_1.ObjectStatus),
            objectType: Object.keys(client_1.ObjectType),
            imageType: Object.keys(client_1.ImageType),
            permissions: Object.keys(client_1.Permissions),
            constantType: Object.keys(client_1.ConstantTypes),
            costType: Object.keys(client_1.CostType),
        };
    }
    async getHome(token) {
        let res = {};
        let userId = 0;
        try {
            await this.auth.getUser(token)
                .then((user) => {
                userId = user.sub;
            });
        }
        catch (err) { }
        await this.prisma.ads.findMany({
            where: {
                adsType: 'BANNER',
                status: 'ACTIVE'
            },
            orderBy: [
                {
                    index: 'desc'
                },
                {
                    createdAt: 'desc'
                }
            ],
            include: {
                adsImage: true
            }
        }).then(result => {
            res = {
                banner: result
            };
        });
        await this.prisma.ads.findFirst({
            where: {
                adsType: 'POPUP',
                status: 'ACTIVE'
            },
            orderBy: [
                {
                    index: 'desc'
                },
                {
                    createdAt: 'desc'
                }
            ],
            include: {
                adsImage: true
            }
        }).then(result => {
            res = Object.assign(Object.assign({}, res), { popup: result });
        });
        await this.prisma.ads.findMany({
            where: {
                OR: [
                    {
                        adsType: 'HOME_LARGE'
                    },
                    {
                        adsType: 'HOME_MINI'
                    }
                ],
                AND: [
                    {
                        status: 'ACTIVE'
                    }
                ]
            },
            orderBy: [
                {
                    index: 'desc'
                },
                {
                    createdAt: 'desc'
                }
            ],
            include: {
                adsImage: true
            }
        }).then(result => {
            res = Object.assign(Object.assign({}, res), { ads: result });
        });
        if (userId != 0) {
            await this.prisma.inbox.findMany({
                where: {
                    userId: userId,
                    isRead: false
                },
                orderBy: {
                    createdAt: 'desc'
                }
            }).then(result => {
                res = Object.assign(Object.assign({}, res), { inboxCount: result.length });
            });
            await this.carService.getUserCars(userId).then(result => {
                res = Object.assign(Object.assign({}, res), { cars: result });
            });
            await this.prisma.users.findUnique({
                where: { id: userId }
            }).then(result => {
                res = Object.assign(Object.assign({}, res), { user: result });
            });
        }
        await this.prisma.constantPrices.findMany({
            where: {
                OR: [
                    {
                        type: "FUEL_80"
                    },
                    {
                        type: "FUEL_92"
                    },
                    {
                        type: "FUEL_95"
                    }
                ]
            }
        }).then(result => {
            res = Object.assign(Object.assign({}, res), { fuel_price: result });
        });
        return res;
    }
};
OtherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, auth_service_1.AuthService, cars_service_1.CarsService])
], OtherService);
exports.OtherService = OtherService;
//# sourceMappingURL=other.service.js.map