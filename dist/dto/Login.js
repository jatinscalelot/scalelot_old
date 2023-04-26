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
const class_transformer_1 = require("class-transformer");
const mongoose_1 = __importDefault(require("mongoose"));
class Login {
    constructor(id, userName, password) {
        this._id = id;
        this._userName = userName;
        this._password = password;
    }
    get id() {
        return this._id;
    }
    get userName() {
        return this._userName;
    }
    set userName(value) {
        this._userName = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(param => param.obj ? param.obj.id : null, { toClassOnly: true }),
    __metadata("design:type", mongoose_1.default.Types.ObjectId)
], Login.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "userName" }),
    __metadata("design:type", String)
], Login.prototype, "_userName", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "password" }),
    __metadata("design:type", String)
], Login.prototype, "_password", void 0);
exports.default = Login;
