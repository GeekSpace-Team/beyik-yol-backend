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
exports.PriceController = void 0;
const common_1 = require("@nestjs/common");
const price_service_1 = require("./price.service");
const create_price_dto_1 = require("./dto/create-price.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let PriceController = class PriceController {
    constructor(priceService) {
        this.priceService = priceService;
    }
    create(createPriceDto) {
        return this.priceService.create(createPriceDto);
    }
    findAll() {
        return this.priceService.findAll();
    }
    update(id, updatePriceDto) {
        return this.priceService.update(+id, updatePriceDto);
    }
    remove(id) {
        return this.priceService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('create-price'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_price_dto_1.CreatePriceDto]),
    __metadata("design:returntype", void 0)
], PriceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('get-all-prices'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PriceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)('update-price/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_price_dto_1.CreatePriceDto]),
    __metadata("design:returntype", void 0)
], PriceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete-price/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PriceController.prototype, "remove", null);
PriceController = __decorate([
    (0, common_1.Controller)('price'),
    __metadata("design:paramtypes", [price_service_1.PriceService])
], PriceController);
exports.PriceController = PriceController;
//# sourceMappingURL=price.controller.js.map