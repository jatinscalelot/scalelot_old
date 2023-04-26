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
const class_transformer_1 = require("class-transformer");
const tsyringe_1 = require("tsyringe");
const Login_1 = __importDefault(require("../dto/Login"));
const LoginEntity_1 = __importDefault(require("./entity/LoginEntity"));
let LoginRepository = class LoginRepository {
    async getLogin(login) {
        const loginEntity = await LoginEntity_1.default.findOne({ userName: login.userName });
        return (0, class_transformer_1.plainToInstance)(Login_1.default, loginEntity, { excludeExtraneousValues: true });
    }
};
LoginRepository = __decorate([
    (0, tsyringe_1.autoInjectable)()
], LoginRepository);
exports.default = LoginRepository;
