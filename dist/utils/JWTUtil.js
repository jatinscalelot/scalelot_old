"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JWT_1 = __importDefault(require("../config/JWT"));
const Logger_1 = __importDefault(require("./Logger"));
class JWTUtil {
    static async generateJWTSessionToken(payload) {
        Logger_1.default.debug("Creating Session Token");
        let token = await JWT_1.default.encode(payload);
        Logger_1.default.debug("Token created.");
        return token;
    }
    static async generateJWTCSRFToken(payload) {
        Logger_1.default.debug("Creating CSRF Token");
        let token = await JWT_1.default.encode(payload);
        Logger_1.default.debug("Token created.");
        return token;
    }
}
exports.default = JWTUtil;
