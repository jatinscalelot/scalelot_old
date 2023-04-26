"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorTypeEnum = void 0;
var ErrorTypeEnum;
(function (ErrorTypeEnum) {
    ErrorTypeEnum["BAD_TOKEN"] = "BadTokenError";
    ErrorTypeEnum["TOKEN_EXPIRED"] = "TokenExpiredError";
    ErrorTypeEnum["UNAUTHORIZED"] = "AuthFailureError";
    ErrorTypeEnum["ACCESS_TOKEN"] = "AccessTokenError";
    ErrorTypeEnum["INTERNAL"] = "InternalError";
    ErrorTypeEnum["NOT_FOUND"] = "NotFoundError";
    ErrorTypeEnum["NO_ENTRY"] = "NoEntryError";
    ErrorTypeEnum["NO_DATA"] = "NoDataError";
    ErrorTypeEnum["BAD_REQUEST"] = "BadRequestError";
    ErrorTypeEnum["FORBIDDEN"] = "ForbiddenError";
})(ErrorTypeEnum = exports.ErrorTypeEnum || (exports.ErrorTypeEnum = {}));
