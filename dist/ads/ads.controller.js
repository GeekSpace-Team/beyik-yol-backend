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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdsController = void 0;
const common_1 = require("@nestjs/common");
const ads_service_1 = require("./ads.service");
const create_ad_dto_1 = require("./dto/create-ad.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const file_helper_1 = require("../helper/file.helper");
const utils_1 = require("../helper/utils");
let AdsController = class AdsController {
    constructor(adsService) {
        this.adsService = adsService;
    }
    create(file, createAdDto) {
        try {
            return this.adsService.create(file.filename, createAdDto);
        }
        catch (err) {
            throw new common_1.BadRequestException();
        }
    }
    findAll() {
        return this.adsService.findAll();
    }
    update(file, id, updateAdsDto) {
        try {
            if ((0, utils_1.isNullValue)(file)) {
                return this.adsService.update('', +id, updateAdsDto);
            }
            else {
                return this.adsService.update(file.filename, +id, updateAdsDto);
            }
        }
        catch (err) {
            throw new common_1.BadRequestException();
        }
    }
    remove(id) {
        return this.adsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)("create-ads"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image", {
        storage: (0, multer_1.diskStorage)({
            destination: "./upload/car/ads",
            filename: file_helper_1.editFileName
        })
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_ad_dto_1.CreateAdDto]),
    __metadata("design:returntype", void 0)
], AdsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('get-all-ads'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)("update-ads/:id"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image", {
        storage: (0, multer_1.diskStorage)({
            destination: "./upload/car/ads",
            filename: file_helper_1.editFileName
        })
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_ad_dto_1.CreateAdDto]),
    __metadata("design:returntype", void 0)
], AdsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete-ads/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdsController.prototype, "remove", null);
AdsController = __decorate([
    (0, common_1.Controller)('ads'),
    __metadata("design:paramtypes", [ads_service_1.AdsService])
], AdsController);
exports.AdsController = AdsController;
//# sourceMappingURL=ads.controller.js.map