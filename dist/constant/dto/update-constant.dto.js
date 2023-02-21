"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConstantDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_constant_dto_1 = require("./create-constant.dto");
class UpdateConstantDto extends (0, swagger_1.PartialType)(create_constant_dto_1.CreateConstantDto) {
}
exports.UpdateConstantDto = UpdateConstantDto;
//# sourceMappingURL=update-constant.dto.js.map