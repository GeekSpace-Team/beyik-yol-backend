"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarBrandModule = void 0;
const common_1 = require("@nestjs/common");
const car_brand_service_1 = require("./car-brand.service");
const car_brand_controller_1 = require("./car-brand.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let CarBrandModule = class CarBrandModule {
};
CarBrandModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [car_brand_controller_1.CarBrandController],
        providers: [car_brand_service_1.CarBrandService]
    })
], CarBrandModule);
exports.CarBrandModule = CarBrandModule;
//# sourceMappingURL=car-brand.module.js.map