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
exports.AdsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const create_ad_image_dto_1 = require("./dto/create-ad-image.dto");
const utils_1 = require("../helper/utils");
let AdsService = class AdsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(fileName, createAdDto) {
        let adsId = 0;
        createAdDto.index = parseInt(createAdDto.index.toString());
        await this.prisma.ads.create({
            data: createAdDto
        }).then(result => {
            adsId = result.id;
        });
        let adsImage = new create_ad_image_dto_1.CreateAdImageDto();
        adsImage.adsId = adsId;
        adsImage.url = fileName;
        await this.prisma.adsImage.create({
            data: adsImage
        });
        return this.prisma.ads.findUnique({
            where: { id: adsId },
            include: {
                adsImage: true
            }
        });
    }
    findAll() {
        return this.prisma.ads.findMany({
            orderBy: [
                {
                    createdAt: 'desc'
                }
            ],
            include: {
                adsImage: true
            }
        });
    }
    async update(fileName, id, updateAdsDto) {
        updateAdsDto.index = parseInt(updateAdsDto.index.toString());
        if (!(0, utils_1.isNullValue)(fileName)) {
            await this.prisma.adsImage.deleteMany({
                where: { adsId: id }
            }).then(result => {
            });
            let adsImage = new create_ad_image_dto_1.CreateAdImageDto();
            adsImage.adsId = id;
            adsImage.url = fileName;
            await this.prisma.adsImage.create({
                data: adsImage
            });
        }
        return await this.prisma.ads.update({
            where: {
                id: id,
            },
            data: updateAdsDto
        });
    }
    remove(id) {
        return this.prisma.ads.delete({
            where: { id: id }
        });
    }
};
AdsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdsService);
exports.AdsService = AdsService;
//# sourceMappingURL=ads.service.js.map