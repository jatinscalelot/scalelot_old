"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("../error/ApiError");
const Config_1 = require("../config/Config");
const Logger_1 = __importDefault(require("../utils/Logger"));
class ErrorHandlerMiddlewares {
}
exports.default = ErrorHandlerMiddlewares;
_a = ErrorHandlerMiddlewares;
ErrorHandlerMiddlewares.undefinedRoutesErrorMiddleware = async (req, res, next) => next(new ApiError_1.NotFoundError());
ErrorHandlerMiddlewares.errorHandlerMiddleware = async (err, req, res, next) => {
    if (err instanceof ApiError_1.ApiError) {
        Logger_1.default.debug("API Error caught");
        return res.redirect('/');
        // ApiError.handle(err, res);
    }
    else {
        if (Config_1.environment === 'development') {
            Logger_1.default.error(err);
            return res.redirect('/');
            // return res.status(500).send(err.message);
        }
        return res.redirect('/');
        // ApiError.handle(new InternalError(), res);
    }
};
