"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNullValue = void 0;
const isNullValue = (value) => {
    if (typeof value === 'undefined' || value === null || value === '')
        return true;
    else
        return false;
};
exports.isNullValue = isNullValue;
//# sourceMappingURL=utils.js.map