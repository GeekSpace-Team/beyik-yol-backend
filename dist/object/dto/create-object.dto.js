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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateObjectDto = void 0;
const class_validator_1 = require("class-validator");
class CreateObjectDto {
    constructor() {
        this.image = '';
        this.logo = '';
        this.status = 'FREE';
        this.type = 'SERVICE';
        this.description_tm = '';
        this.description_ru = '';
        this.latitude = '0';
        this.longitude = '0';
        this.instagram = 'https://instagram.com';
        this.webUrl = '';
        this.workerLimit = -1;
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateObjectDto.prototype, "name_tm", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateObjectDto.prototype, "name_ru", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateObjectDto.prototype, "address_tm", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateObjectDto.prototype, "address_ru", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateObjectDto.prototype, "phoneNumber", void 0);
exports.CreateObjectDto = CreateObjectDto;
//# sourceMappingURL=create-object.dto.js.map