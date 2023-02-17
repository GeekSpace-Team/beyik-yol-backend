"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCarBrandDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_car_brand_dto_1 = require("./create-car-brand.dto");
class UpdateCarBrandDto extends (0, swagger_1.PartialType)(create_car_brand_dto_1.CreateCarBrandDto) {
}
exports.UpdateCarBrandDto = UpdateCarBrandDto;
//# sourceMappingURL=update-car-brand.dto.js.map