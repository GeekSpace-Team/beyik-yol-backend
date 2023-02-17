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
exports.CarBrandController = void 0;
const common_1 = require("@nestjs/common");
const car_brand_service_1 = require("./car-brand.service");
const create_car_brand_dto_1 = require("./dto/create-car-brand.dto");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const multer_1 = require("multer");
const file_helper_1 = require("../helper/file.helper");
const utils_1 = require("../helper/utils");
let CarBrandController = class CarBrandController {
    constructor(carBrandService) {
        this.carBrandService = carBrandService;
    }
    create(file, createCarBrandDto) {
        try {
            return this.carBrandService.create(file.filename, createCarBrandDto);
        }
        catch (err) {
            throw new common_1.BadRequestException();
        }
    }
    findAll() {
        try {
            return this.carBrandService.findAll();
        }
        catch (err) {
            throw new common_1.BadRequestException();
        }
    }
    update(file, id, updateCarBrandDto) {
        try {
            if ((0, utils_1.isNullValue)(file)) {
                return this.carBrandService.update('', +id, updateCarBrandDto);
            }
            else {
                return this.carBrandService.update(file.filename, +id, updateCarBrandDto);
            }
        }
        catch (err) {
            throw new common_1.BadRequestException();
        }
    }
    remove(id) {
        try {
            return this.carBrandService.remove(+id);
        }
        catch (err) {
            throw new common_1.BadRequestException();
        }
    }
};
__decorate([
    (0, common_1.Post)("create-brand"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image", {
        storage: (0, multer_1.diskStorage)({
            destination: "./upload/car/car-brand",
            filename: file_helper_1.editFileName
        })
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_car_brand_dto_1.CreateCarBrandDto]),
    __metadata("design:returntype", void 0)
], CarBrandController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("get-all-carBrand"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarBrandController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)("update-car-brand/:id"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image", {
        storage: (0, multer_1.diskStorage)({
            destination: "./upload/car/car-brand",
            filename: file_helper_1.editFileName
        })
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_car_brand_dto_1.CreateCarBrandDto]),
    __metadata("design:returntype", void 0)
], CarBrandController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("remove-car-brand/:id"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarBrandController.prototype, "remove", null);
CarBrandController = __decorate([
    (0, common_1.Controller)("car-brand"),
    __metadata("design:paramtypes", [car_brand_service_1.CarBrandService])
], CarBrandController);
exports.CarBrandController = CarBrandController;
//# sourceMappingURL=car-brand.controller.js.map