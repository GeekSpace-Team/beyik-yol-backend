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
exports.MobileAuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const uuid_1 = require("uuid");
const checked_number_dto_1 = require("./dto/checked-number.dto");
let MobileAuthService = class MobileAuthService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async checkExisting(phone) {
        let exist = false;
        await this.prisma.users.findMany({
            where: {
                phonenumber: phone
            }
        }).then(result => {
            exist = result.length > 0;
        });
        return exist;
    }
    async checkPhoneNumber(phone) {
        let exist = await this.checkExisting(phone);
        return {
            exist: exist
        };
    }
    async sendNumber(phone) {
        let exist = await this.checkExisting(phone);
        let uuid = (0, uuid_1.v4)();
        let lastDay = Date.now() - (24 * 60 * 60 * 1000);
        let lDay = new Date(lastDay).toISOString();
        let count = 0;
        await this.prisma.checkedNumber.findMany({
            where: {
                AND: [
                    {
                        createdAt: {
                            gte: lDay
                        }
                    },
                    {
                        phone: phone
                    }
                ]
            }
        }).then((value) => {
            count = value.length;
        });
        if (count > 3) {
            throw new common_1.HttpException({
                tm: "Bu belgiden köp ýüzlenme boldy! Birazdan gaýta synanyşyp görüň!",
                ru: "Этот номер превышен! Пожалуйста, повторите попытку в ближайшее время!",
            }, common_1.HttpStatus.TOO_MANY_REQUESTS);
        }
        else {
            let check = new checked_number_dto_1.CheckedNumberDto();
            check.phone = phone;
            check.uuid = uuid;
            check.is_exists = exist;
            return await this.prisma.checkedNumber.create({
                data: check
            });
        }
    }
};
MobileAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MobileAuthService);
exports.MobileAuthService = MobileAuthService;
//# sourceMappingURL=mobile-auth.service.js.map