"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCarEngineDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_car_engine_dto_1 = require("./create-car-engine.dto");
class UpdateCarEngineDto extends (0, swagger_1.PartialType)(create_car_engine_dto_1.CreateCarEngineDto) {
}
exports.UpdateCarEngineDto = UpdateCarEngineDto;
//# sourceMappingURL=update-car-engine.dto.js.map