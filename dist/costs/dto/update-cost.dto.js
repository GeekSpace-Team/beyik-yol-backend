"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCostDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_cost_dto_1 = require("./create-cost.dto");
class UpdateCostDto extends (0, swagger_1.PartialType)(create_cost_dto_1.CreateCostDto) {
}
exports.UpdateCostDto = UpdateCostDto;
//# sourceMappingURL=update-cost.dto.js.map