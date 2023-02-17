"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCarImageDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_car_image_dto_1 = require("./create-car-image.dto");
class UpdateCarImageDto extends (0, swagger_1.PartialType)(create_car_image_dto_1.CreateCarImageDto) {
}
exports.UpdateCarImageDto = UpdateCarImageDto;
//# sourceMappingURL=update-car-image.dto.js.map