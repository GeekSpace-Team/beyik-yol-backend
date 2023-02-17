"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvacuatorService = void 0;
const common_1 = require("@nestjs/common");
let EvacuatorService = class EvacuatorService {
    create(createEvacuatorDto) {
        return 'This action adds a new evacuator';
    }
    findAll() {
        return `This action returns all evacuator`;
    }
    findOne(id) {
        return `This action returns a #${id} evacuator`;
    }
    update(id, updateEvacuatorDto) {
        return `This action updates a #${id} evacuator`;
    }
    remove(id) {
        return `This action removes a #${id} evacuator`;
    }
};
EvacuatorService = __decorate([
    (0, common_1.Injectable)()
], EvacuatorService);
exports.EvacuatorService = EvacuatorService;
//# sourceMappingURL=evacuator.service.js.map