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
exports.MobileAuthController = void 0;
const common_1 = require("@nestjs/common");
const mobile_auth_service_1 = require("./mobile-auth.service");
const send_number_dto_1 = require("./dto/send-number.dto");
const check_code_dto_1 = require("./dto/check-code.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const file_helper_1 = require("../helper/file.helper");
const save_fcm_token_dto_1 = require("./dto/save-fcm-token.dto");
let MobileAuthController = class MobileAuthController {
    constructor(mobileAuthService) {
        this.mobileAuthService = mobileAuthService;
    }
    checkNumber(phone) {
        return this.mobileAuthService.checkPhoneNumber(phone);
    }
    sendNumber(body) {
        return this.mobileAuthService.sendNumber(body.number);
    }
    acceptNumber(body) {
        return this.mobileAuthService.acceptPhone(body.number);
    }
    checkCode(body) {
        return this.mobileAuthService.checkNumber(body.number, body.uuid);
    }
    getProfile(req) {
        return this.mobileAuthService.getProfile(+req.user['userId']);
    }
    editProfile(req, body) {
        return this.mobileAuthService.editProfile(+req.user['userId'], body);
    }
    changeImage(file, req) {
        try {
            return this.mobileAuthService.changeImage(file.filename, +req.user['userId']);
        }
        catch (err) {
            throw new common_1.BadRequestException();
        }
    }
    saveFcmToken(req, body) {
        return this.mobileAuthService.saveFcmToken(+req.user['userId'], body);
    }
};
__decorate([
    (0, common_1.Post)('check-phone-number/:phone'),
    __param(0, (0, common_1.Param)('phone')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MobileAuthController.prototype, "checkNumber", null);
__decorate([
    (0, common_1.Post)('send-number'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_number_dto_1.SendNumberDto]),
    __metadata("design:returntype", void 0)
], MobileAuthController.prototype, "sendNumber", null);
__decorate([
    (0, common_1.Post)('accept-number'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_number_dto_1.SendNumberDto]),
    __metadata("design:returntype", void 0)
], MobileAuthController.prototype, "acceptNumber", null);
__decorate([
    (0, common_1.Post)('check-code'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [check_code_dto_1.CheckCodeDto]),
    __metadata("design:returntype", void 0)
], MobileAuthController.prototype, "checkCode", null);
__decorate([
    (0, common_1.Get)('get-profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MobileAuthController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Put)('edit-profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], MobileAuthController.prototype, "editProfile", null);
__decorate([
    (0, common_1.Put)("change-image"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image", {
        storage: (0, multer_1.diskStorage)({
            destination: "./upload/users/images/",
            filename: file_helper_1.editFileName
        })
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MobileAuthController.prototype, "changeImage", null);
__decorate([
    (0, common_1.Post)("save-fcm-token"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, save_fcm_token_dto_1.SaveFcmTokenDto]),
    __metadata("design:returntype", void 0)
], MobileAuthController.prototype, "saveFcmToken", null);
MobileAuthController = __decorate([
    (0, common_1.Controller)('mobile-auth'),
    __metadata("design:paramtypes", [mobile_auth_service_1.MobileAuthService])
], MobileAuthController);
exports.MobileAuthController = MobileAuthController;
//# sourceMappingURL=mobile-auth.controller.js.map