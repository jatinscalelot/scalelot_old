"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const util_1 = require("util");
const jsonwebtoken_1 = require("jsonwebtoken");
const class_transformer_1 = require("class-transformer");
const ApiError_1 = require("../error/ApiError");
const Logger_1 = __importDefault(require("../utils/Logger"));
const SessionPayload_1 = __importDefault(require("../utils/other/SessionPayload"));
class JWT {
    static readPublicKey() {
        return (0, util_1.promisify)(fs_1.readFile)(path_1.default.join(__dirname, '../../keys/scalelot.public.pem'), 'utf8');
    }
    static readPrivateKey() {
        return (0, util_1.promisify)(fs_1.readFile)(path_1.default.join(__dirname, '../../keys/scalelot.private.pem'), 'utf8');
    }
    static async encode(payload) {
        const cert = await this.readPrivateKey();
        if (!cert)
            throw new ApiError_1.InternalError('Token generation failure');
        // @ts-ignore
        return (0, util_1.promisify)(jsonwebtoken_1.sign)({ ...payload }, cert, { algorithm: 'RS256' });
    }
    /**
     * This method checks the token and returns the decoded data when token is valid in all respect
     */
    static async validateSessionToken(token) {
        const cert = await this.readPublicKey();
        try {
            // @ts-ignore
            return (await (0, util_1.promisify)(jsonwebtoken_1.verify)(token, cert));
        }
        catch (e) {
            Logger_1.default.debug(e);
            if (e && e.name === 'TokenExpiredError')
                throw new ApiError_1.TokenExpiredError();
            // throws error if the token has not been encrypted by the private key
            throw new ApiError_1.BadTokenError();
        }
    }
    /**
     * This method checks the token and returns the decoded data when token is valid in all respect
     */
    static async validateCSRFToken(token) {
        const cert = await this.readPublicKey();
        try {
            // @ts-ignore
            return (await (0, util_1.promisify)(jsonwebtoken_1.verify)(token, cert));
        }
        catch (e) {
            Logger_1.default.debug(e);
            if (e && e.name === 'TokenExpiredError')
                throw new ApiError_1.TokenExpiredError();
            // throws error if the token has not been encrypted by the private key
            throw new ApiError_1.BadTokenError();
        }
    }
    /**
     * Returns the decoded payload if the signature is valid even if it is expired
     */
    static async decodeSessionToken(token) {
        const cert = await this.readPublicKey();
        try {
            // @ts-ignore
            return (0, class_transformer_1.plainToInstance)(SessionPayload_1.default, (await (0, util_1.promisify)(jsonwebtoken_1.verify)(token, cert, { ignoreExpiration: true })));
        }
        catch (e) {
            Logger_1.default.debug(e);
            throw new ApiError_1.BadTokenError();
        }
    }
    /**
     * Returns the decoded payload if the signature is valid even if it is expired
     */
    static async decodeCSRFToken(token) {
        const cert = await this.readPublicKey();
        try {
            // @ts-ignore
            return (await (0, util_1.promisify)(jsonwebtoken_1.verify)(token, cert, { ignoreExpiration: true }));
        }
        catch (e) {
            Logger_1.default.debug(e);
            throw new ApiError_1.BadTokenError();
        }
    }
}
exports.default = JWT;
