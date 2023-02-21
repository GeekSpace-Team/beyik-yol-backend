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
exports.InboxController = void 0;
const common_1 = require("@nestjs/common");
const inbox_service_1 = require("./inbox.service");
const create_inbox_dto_1 = require("./dto/create-inbox.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let InboxController = class InboxController {
    constructor(inboxService) {
        this.inboxService = inboxService;
    }
    create(createInboxDto) {
        return this.inboxService.sendToAll(createInboxDto);
    }
    sendToUser(createInboxDto) {
        return this.inboxService.sendToUser(createInboxDto);
    }
    findAll() {
        return this.inboxService.findAll();
    }
    remove(id) {
        return this.inboxService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('send-to-all'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inbox_dto_1.CreateInboxDto]),
    __metadata("design:returntype", void 0)
], InboxController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('send-to-user'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inbox_dto_1.CreateInboxDto]),
    __metadata("design:returntype", void 0)
], InboxController.prototype, "sendToUser", null);
__decorate([
    (0, common_1.Get)('get-all-inbox'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InboxController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)('delete-inbox/:id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InboxController.prototype, "remove", null);
InboxController = __decorate([
    (0, common_1.Controller)('inbox'),
    __metadata("design:paramtypes", [inbox_service_1.InboxService])
], InboxController);
exports.InboxController = InboxController;
//# sourceMappingURL=inbox.controller.js.map