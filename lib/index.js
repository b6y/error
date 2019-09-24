"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function fixKey(key) {
    if (!key) {
        return "$";
    }
    return key;
}
function fixPath(path) {
    if (!path || !Array.isArray(path)) {
        return ["$"];
    }
    if (path[0] !== "$") {
        return __spreadArrays(["$"], path);
    }
    return path;
}
function make(message, key, path, meta) {
    if (key === void 0) { key = null; }
    if (path === void 0) { path = []; }
    if (meta === void 0) { meta = null; }
    return { message: message, key: fixKey(key), path: fixPath(path), meta: meta };
}
exports.make = make;
//# sourceMappingURL=index.js.map