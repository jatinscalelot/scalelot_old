"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const Config_1 = require("../config/Config");
const Logger_1 = __importDefault(require("../utils/Logger"));
const ApiError_1 = require("../error/ApiError");
const URLUtils_1 = __importDefault(require("../utils/URLUtils"));
const JWT_1 = __importDefault(require("../config/JWT"));
let AuthMiddleware = class AuthMiddleware {
    constructor() {
        this.authMiddleware = [
            //Validate if Auth token is provided
            async (req, res, next) => {
                Logger_1.default.debug("Validating for auth token: " + req.url);
                if (Config_1.PROTECTED_ENDPOINTS.includes(req.url)) {
                    if (req.header('auth-token')) {
                        next();
                    }
                    else {
                        next(new ApiError_1.BadTokenError());
                    }
                }
                else {
                    next();
                }
            },
            // //Validate if CSRF token is provided
            // async (req: ProtectedRequest, res: Response, next: NextFunction) => {
            //     Logger.debug("Validating for csrf token");
            //     if (!openEndpoints.includes(req.url)) {
            //         validator(schema.csrfToken, ValidationSource.HEADER)(req, res, next);
            //     } else {
            //         next();
            //     }
            // },
            //
            // //Validate CSRF token
            // async (req: ProtectedRequest, res: Response, next: NextFunction) => {
            //     Logger.debug("Validating CSRF Token");
            //     if (URLUtils.isProtectedURL(req)) {
            //         await JWT.decodeCSRFToken(req.header("csrf-token")!);
            //     }
            //     next();
            // },
            //Validate auth token and save payload in request
            async (req, res, next) => {
                Logger_1.default.debug("Validating Session token");
                try {
                    if (URLUtils_1.default.isProtectedURL(req)) {
                        await JWT_1.default.validateSessionToken(req.header("auth-token"));
                        let sessionPayload = await JWT_1.default.decodeSessionToken(req.header("auth-token"));
                        req.accessToken = req.header("auth-token");
                        req.sessionPayload = sessionPayload;
                    }
                    Logger_1.default.debug("Validation success");
                    next();
                }
                catch (e) {
                    Logger_1.default.error(e.stack);
                    next(new ApiError_1.BadTokenError());
                }
            }
        ];
    }
};
AuthMiddleware = __decorate([
    (0, tsyringe_1.autoInjectable)()
], AuthMiddleware);
exports.default = AuthMiddleware;
