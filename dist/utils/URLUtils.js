"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("../config/Config");
class URLUtils {
    static isProtectedURL(req) {
        return Config_1.PROTECTED_ENDPOINTS.includes(req.url);
    }
}
exports.default = URLUtils;
