"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvacuatorModule = void 0;
const common_1 = require("@nestjs/common");
const evacuator_service_1 = require("./evacuator.service");
const evacuator_controller_1 = require("./evacuator.controller");
let EvacuatorModule = class EvacuatorModule {
};
EvacuatorModule = __decorate([
    (0, common_1.Module)({
        controllers: [evacuator_controller_1.EvacuatorController],
        providers: [evacuator_service_1.EvacuatorService]
    })
], EvacuatorModule);
exports.EvacuatorModule = EvacuatorModule;
//# sourceMappingURL=evacuator.module.js.map