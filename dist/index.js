"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function rollupPluginInputThrough(_a) {
    var _b = _a.input, input = _b === void 0 ? function (val) { return val; } : _b;
    return {
        name: "input-through",
        resolveId: function (id) {
            return input(id);
        },
        load: function (id) {
            return fs.readFileSync(id).toString();
        },
    };
}
exports.default = rollupPluginInputThrough;
//# sourceMappingURL=index.js.map