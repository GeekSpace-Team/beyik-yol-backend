"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtherService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let OtherService = class OtherService {
    findAll() {
        return {
            device: Object.keys(client_1.Device),
            loginType: Object.keys(client_1.LoginLogType),
            eventType: Object.keys(client_1.EventType),
            pageType: Object.keys(client_1.PageType),
            priceType: Object.keys(client_1.ConstantPriceType),
            objectPermissions: Object.keys(client_1.ObjectPermissions),
            adsStatus: Object.keys(client_1.AdsStatus),
            itemStatus: Object.keys(client_1.ItemStatus),
            userStatus: Object.keys(client_1.UserStatus),
            objectStatus: Object.keys(client_1.ObjectStatus),
            objectType: Object.keys(client_1.ObjectType),
            imageType: Object.keys(client_1.ImageType),
            permissions: Object.keys(client_1.Permissions),
            constantType: Object.keys(client_1.ConstantTypes)
        };
    }
};
OtherService = __decorate([
    (0, common_1.Injectable)()
], OtherService);
exports.OtherService = OtherService;
//# sourceMappingURL=other.service.js.map