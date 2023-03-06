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
exports.CarImageController = void 0;
const common_1 = require("@nestjs/common");
const car_image_service_1 = require("./car-image.service");
const create_car_image_dto_1 = require("./dto/create-car-image.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const file_helper_1 = require("../helper/file.helper");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let CarImageController = class CarImageController {
    constructor(carImageService) {
        this.carImageService = carImageService;
    }
    create(files, id) {
        let images = [];
        files.forEach(file => {
            images.push({
                carId: parseInt(id),
                status: 'ACTIVE',
                url: file.filename,
                type: 'LARGE'
            });
        });
        return this.carImageService.create(images);
    }
    update(file, id, updateCarImageDto) {
        updateCarImageDto.url = file.filename;
        updateCarImageDto.carId = parseInt(String(updateCarImageDto.carId));
        return this.carImageService.update(+id, updateCarImageDto);
    }
    remove(id) {
        console.log(id);
        return this.carImageService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('add-image/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)("image", 20, {
        storage: (0, multer_1.diskStorage)({
            destination: "./upload/car/image",
            filename: file_helper_1.editFileName
        })
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String]),
    __metadata("design:returntype", void 0)
], CarImageController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('update-car-image/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image", {
        storage: (0, multer_1.diskStorage)({
            destination: "./upload/car/image",
            filename: file_helper_1.editFileName
        })
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, create_car_image_dto_1.CreateCarImageDto]),
    __metadata("design:returntype", void 0)
], CarImageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('remove-car-image/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CarImageController.prototype, "remove", null);
CarImageController = __decorate([
    (0, common_1.Controller)('car-image'),
    __metadata("design:paramtypes", [car_image_service_1.CarImageService])
], CarImageController);
exports.CarImageController = CarImageController;
//# sourceMappingURL=car-image.controller.js.map