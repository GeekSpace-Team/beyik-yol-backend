"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const articles_module_1 = require("./articles/articles.module");
const auth_module_1 = require("./auth/auth.module");
const cars_module_1 = require("./cars/cars.module");
const exception_filter_1 = require("./exceptions/exception.filter");
const prisma_module_1 = require("./prisma/prisma.module");
const users_module_1 = require("./users/users.module");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const car_brand_module_1 = require("./car-brand/car-brand.module");
const platform_express_1 = require("@nestjs/platform-express");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const car_model_module_1 = require("./car-model/car-model.module");
const car_option_module_1 = require("./car-option/car-option.module");
const car_engine_module_1 = require("./car-engine/car-engine.module");
const car_transmition_module_1 = require("./car-transmition/car-transmition.module");
const car_image_module_1 = require("./car-image/car-image.module");
const evacuator_module_1 = require("./evacuator/evacuator.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, articles_module_1.ArticlesModule, users_module_1.UsersModule, cars_module_1.CarsModule, auth_module_1.AuthModule, car_brand_module_1.CarBrandModule, serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'upload'),
            }), platform_express_1.MulterModule.registerAsync({
                useFactory: () => ({
                    dest: './upload'
                })
            }), car_model_module_1.CarModelModule, car_option_module_1.CarOptionModule, car_engine_module_1.CarEngineModule, car_transmition_module_1.CarTransmitionModule, car_image_module_1.CarImageModule, evacuator_module_1.EvacuatorModule],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_FILTER,
                useClass: exception_filter_1.HttpExceptionFilter,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map