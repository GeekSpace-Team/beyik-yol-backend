"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCarOptionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_car_option_dto_1 = require("./create-car-option.dto");
class UpdateCarOptionDto extends (0, swagger_1.PartialType)(create_car_option_dto_1.CreateCarOptionDto) {
}
exports.UpdateCarOptionDto = UpdateCarOptionDto;
//# sourceMappingURL=update-car-option.dto.js.map