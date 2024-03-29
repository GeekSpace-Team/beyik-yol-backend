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
exports.OtherController = void 0;
const common_1 = require("@nestjs/common");
const other_service_1 = require("./other.service");
let OtherController = class OtherController {
    constructor(otherService) {
        this.otherService = otherService;
    }
    findAll() {
        return this.otherService.findAll();
    }
    getHome(req, isSend) {
        let token = req.headers['authorization'];
        try {
            token = token.split(' ')[1];
        }
        catch (err) { }
        return this.otherService.getHome(token, isSend);
    }
};
__decorate([
    (0, common_1.Get)('get-types'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OtherController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('get-home'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('isSend')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Boolean]),
    __metadata("design:returntype", void 0)
], OtherController.prototype, "getHome", null);
OtherController = __decorate([
    (0, common_1.Controller)('other'),
    __metadata("design:paramtypes", [other_service_1.OtherService])
], OtherController);
exports.OtherController = OtherController;
//# sourceMappingURL=other.controller.js.map