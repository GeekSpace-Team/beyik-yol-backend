"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileAuthModule = void 0;
const common_1 = require("@nestjs/common");
const mobile_auth_service_1 = require("./mobile-auth.service");
const mobile_auth_controller_1 = require("./mobile-auth.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const users_module_1 = require("../users/users.module");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../auth/constants");
let MobileAuthModule = class MobileAuthModule {
};
MobileAuthModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, users_module_1.UsersModule, passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret
            }),],
        controllers: [mobile_auth_controller_1.MobileAuthController],
        providers: [mobile_auth_service_1.MobileAuthService]
    })
], MobileAuthModule);
exports.MobileAuthModule = MobileAuthModule;
//# sourceMappingURL=mobile-auth.module.js.map