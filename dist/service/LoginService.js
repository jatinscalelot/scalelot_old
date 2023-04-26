"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const LoginRepository_1 = __importDefault(require("../repository/LoginRepository"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const JWTUtil_1 = __importDefault(require("../utils/JWTUtil"));
const ApiError_1 = require("../error/ApiError");
const SessionPayload_1 = __importDefault(require("../utils/other/SessionPayload"));
let LoginService = class LoginService {
    constructor(loginRepository) {
        this._loginRepository = loginRepository;
    }
    async loginUser(login) {
        let loginFromDB = await this._loginRepository.getLogin(login);
        let bcryptComparisonSuccess = await bcrypt_1.default.compare(login.password, loginFromDB.password);
        if (bcryptComparisonSuccess) {
            return JWTUtil_1.default.generateJWTSessionToken(new SessionPayload_1.default(loginFromDB.id.toString()));
        }
        throw new ApiError_1.BadRequestError();
    }
};
LoginService = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [LoginRepository_1.default])
], LoginService);
exports.default = LoginService;
