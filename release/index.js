"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
__export(require("./enums"));
__export(require("./types"));
__export(require("./interfaces"));
function nameOfType(type) {
    if ('number' === typeof type) {
        var name_1 = types_1.ExtensionTypes[type];
        if (types_1.isExtensionTypeName(name_1)) {
            return name_1;
        }
    }
    else {
        return nameOfType(types_1.ExtensionTypes[type]);
    }
}
exports.nameOfType = nameOfType;
function isMatchingExtension(other) {
    return ('regex' in other && 'replace' in other);
}
exports.isMatchingExtension = isMatchingExtension;
function isFormattingExtension(other) {
    return ('filter' in other && 'function' === typeof other.filter && other.filter.length > 1);
}
exports.isFormattingExtension = isFormattingExtension;
function isExtensionImplementation(other) {
    return isFormattingExtension(other) || isMatchingExtension(other);
}
exports.isExtensionImplementation = isExtensionImplementation;
function isExtensionProvider(other) {
    return ('name' in other && 'function' === typeof other);
}
exports.isExtensionProvider = isExtensionProvider;
function isExtensionKey(other) {
    return ('string' === typeof other);
}
exports.isExtensionKey = isExtensionKey;
//# sourceMappingURL=index.js.map