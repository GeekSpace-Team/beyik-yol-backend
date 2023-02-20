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
exports.SubRegionController = void 0;
const common_1 = require("@nestjs/common");
const sub_region_service_1 = require("./sub-region.service");
const create_sub_region_dto_1 = require("./dto/create-sub-region.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let SubRegionController = class SubRegionController {
    constructor(subRegionService) {
        this.subRegionService = subRegionService;
    }
    create(createSubRegionDto) {
        return this.subRegionService.create(createSubRegionDto);
    }
    findAll() {
        return this.subRegionService.findAll();
    }
    update(id, updateSubRegionDto) {
        return this.subRegionService.update(+id, updateSubRegionDto);
    }
    remove(id) {
        return this.subRegionService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('create-sub-region'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sub_region_dto_1.CreateSubRegionDto]),
    __metadata("design:returntype", void 0)
], SubRegionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('get-all-sub-regions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubRegionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)('update-sub-region/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_sub_region_dto_1.CreateSubRegionDto]),
    __metadata("design:returntype", void 0)
], SubRegionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('remove-sub-region/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubRegionController.prototype, "remove", null);
SubRegionController = __decorate([
    (0, common_1.Controller)('sub-region'),
    __metadata("design:paramtypes", [sub_region_service_1.SubRegionService])
], SubRegionController);
exports.SubRegionController = SubRegionController;
//# sourceMappingURL=sub-region.controller.js.map