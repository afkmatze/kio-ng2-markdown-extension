"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var extension_1 = require("./extension");
function isExtensionType(other) {
    return (other in extension_1.ExtensionTypes && 'number' === typeof other);
}
exports.isExtensionType = isExtensionType;
function isExtensionTypeName(other, type) {
    if (('string' !== typeof other) || (type && extension_1.ExtensionTypeByName[other] !== type)) {
        return false;
    }
    return (other in extension_1.ExtensionTypeByName);
}
exports.isExtensionTypeName = isExtensionTypeName;
//# sourceMappingURL=extension.check.js.map