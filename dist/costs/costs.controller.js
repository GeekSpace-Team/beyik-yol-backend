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
exports.CostsController = void 0;
const common_1 = require("@nestjs/common");
const costs_service_1 = require("./costs.service");
const cost_change_dto_1 = require("./dto/cost-change.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let CostsController = class CostsController {
    constructor(costsService) {
        this.costsService = costsService;
    }
    createChangeCost(costChangeDto, req) {
        return this.costsService.createChange(costChangeDto, +req.user['userId']);
    }
    getCostsByCarId(id, type) {
        return this.costsService.getByCarId(+id, type);
    }
    getCostsById(id) {
        return this.costsService.getById(+id);
    }
    updateCost(id, costChangeDto) {
        return this.costsService.updateCost(+id, costChangeDto);
    }
    deleteCost(id) {
        return this.costsService.deleteCost(+id);
    }
};
__decorate([
    (0, common_1.Post)('create-cost'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cost_change_dto_1.CostChangeDto, Object]),
    __metadata("design:returntype", void 0)
], CostsController.prototype, "createChangeCost", null);
__decorate([
    (0, common_1.Get)('get-costs-by-car-id/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CostsController.prototype, "getCostsByCarId", null);
__decorate([
    (0, common_1.Get)('get-costs-by-id/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CostsController.prototype, "getCostsById", null);
__decorate([
    (0, common_1.Patch)('update-cost/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, cost_change_dto_1.CostChangeDto]),
    __metadata("design:returntype", void 0)
], CostsController.prototype, "updateCost", null);
__decorate([
    (0, common_1.Delete)('delete-cost/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CostsController.prototype, "deleteCost", null);
CostsController = __decorate([
    (0, common_1.Controller)('costs'),
    __metadata("design:paramtypes", [costs_service_1.CostsService])
], CostsController);
exports.CostsController = CostsController;
//# sourceMappingURL=costs.controller.js.map