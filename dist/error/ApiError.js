"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenError = exports.NoDataError = exports.TokenExpiredError = exports.BadTokenError = exports.NoEntryError = exports.ForbiddenError = exports.UnImplementedError = exports.NotFoundError = exports.BadRequestError = exports.InternalError = exports.AuthFailureError = exports.ApiError = void 0;
const ApiResponse_1 = require("../utils/ApiResponse");
const ErrorTypeEnum_1 = require("../utils/enum/ErrorTypeEnum");
const Config_1 = require("../config/Config");
class ApiError extends Error {
    constructor(type, message = 'error') {
        super(type);
        this.type = type;
        this.message = message;
    }
    static handle(err, res) {
        switch (err.type) {
            case ErrorTypeEnum_1.ErrorTypeEnum.BAD_TOKEN:
            case ErrorTypeEnum_1.ErrorTypeEnum.TOKEN_EXPIRED:
            case ErrorTypeEnum_1.ErrorTypeEnum.UNAUTHORIZED:
                return new ApiResponse_1.AuthFailureResponse(err.message).send(res);
            case ErrorTypeEnum_1.ErrorTypeEnum.ACCESS_TOKEN:
                return new ApiResponse_1.AccessTokenErrorResponse(err.message).send(res);
            case ErrorTypeEnum_1.ErrorTypeEnum.INTERNAL:
                return new ApiResponse_1.InternalErrorResponse(err.message).send(res);
            case ErrorTypeEnum_1.ErrorTypeEnum.NOT_FOUND:
            case ErrorTypeEnum_1.ErrorTypeEnum.NO_ENTRY:
            case ErrorTypeEnum_1.ErrorTypeEnum.NO_DATA:
                return new ApiResponse_1.NotFoundResponse(err.message).send(res);
            case ErrorTypeEnum_1.ErrorTypeEnum.BAD_REQUEST:
                return new ApiResponse_1.BadRequestResponse(err.message).send(res);
            case ErrorTypeEnum_1.ErrorTypeEnum.FORBIDDEN:
                return new ApiResponse_1.ForbiddenResponse(err.message).send(res);
            default: {
                let message = err.message;
                // Do not send failure message in production as it may send sensitive data
                if (Config_1.environment === 'production')
                    message = 'Something wrong happened.';
                return new ApiResponse_1.InternalErrorResponse(message).send(res);
            }
        }
    }
}
exports.ApiError = ApiError;
class AuthFailureError extends ApiError {
    constructor(message = 'Invalid Credentials') {
        super(ErrorTypeEnum_1.ErrorTypeEnum.UNAUTHORIZED, message);
    }
}
exports.AuthFailureError = AuthFailureError;
class InternalError extends ApiError {
    constructor(message = 'Internal error') {
        super(ErrorTypeEnum_1.ErrorTypeEnum.INTERNAL, message);
    }
}
exports.InternalError = InternalError;
class BadRequestError extends ApiError {
    constructor(message = 'Bad Request') {
        super(ErrorTypeEnum_1.ErrorTypeEnum.BAD_REQUEST, message);
    }
}
exports.BadRequestError = BadRequestError;
class NotFoundError extends ApiError {
    constructor(message = 'Not Found') {
        super(ErrorTypeEnum_1.ErrorTypeEnum.NOT_FOUND, message);
    }
}
exports.NotFoundError = NotFoundError;
class UnImplementedError extends ApiError {
    constructor(message = 'API Implementation in progress') {
        super(ErrorTypeEnum_1.ErrorTypeEnum.NOT_FOUND, message);
    }
}
exports.UnImplementedError = UnImplementedError;
class ForbiddenError extends ApiError {
    constructor(message = 'Permission denied') {
        super(ErrorTypeEnum_1.ErrorTypeEnum.FORBIDDEN, message);
    }
}
exports.ForbiddenError = ForbiddenError;
class NoEntryError extends ApiError {
    constructor(message = "Entry don't exists") {
        super(ErrorTypeEnum_1.ErrorTypeEnum.NO_ENTRY, message);
    }
}
exports.NoEntryError = NoEntryError;
class BadTokenError extends ApiError {
    constructor(message = 'Token is not valid') {
        super(ErrorTypeEnum_1.ErrorTypeEnum.BAD_TOKEN, message);
    }
}
exports.BadTokenError = BadTokenError;
class TokenExpiredError extends ApiError {
    constructor(message = 'Token is expired') {
        super(ErrorTypeEnum_1.ErrorTypeEnum.TOKEN_EXPIRED, message);
    }
}
exports.TokenExpiredError = TokenExpiredError;
class NoDataError extends ApiError {
    constructor(message = 'No data available') {
        super(ErrorTypeEnum_1.ErrorTypeEnum.NO_DATA, message);
    }
}
exports.NoDataError = NoDataError;
class AccessTokenError extends ApiError {
    constructor(message = 'Invalid access token') {
        super(ErrorTypeEnum_1.ErrorTypeEnum.ACCESS_TOKEN, message);
    }
}
exports.AccessTokenError = AccessTokenError;
