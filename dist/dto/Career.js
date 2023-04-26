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
class Career {
    constructor(id, firstName, lastName, email, phoneNumber, address, applyFor, experience, currentCTC, expectedCTC, files) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._address = address;
        this._applyFor = applyFor;
        this._experience = experience;
        this._currentCTC = currentCTC;
        this._expectedCTC = expectedCTC;
        this._files = files;
    }
    get id() {
        return this._id;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(value) {
        this._phoneNumber = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    get applyFor() {
        return this._applyFor;
    }
    set applyFor(value) {
        this._applyFor = value;
    }
    get experience() {
        return this._experience;
    }
    set experience(value) {
        this._experience = value;
    }
    get currentCTC() {
        return this._currentCTC;
    }
    set currentCTC(value) {
        this._currentCTC = value;
    }
    get expectedCTC() {
        return this._expectedCTC;
    }
    set expectedCTC(value) {
        this._expectedCTC = value;
    }
    get files() {
        return this._files;
    }
    set files(value) {
        this._files = value;
    }
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(param => param.obj ? param.obj.id : null, { toClassOnly: true }),
    __metadata("design:type", mongoose_1.default.Types.ObjectId)
], Career.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'firstName' }),
    __metadata("design:type", String)
], Career.prototype, "_firstName", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'lastName' }),
    __metadata("design:type", String)
], Career.prototype, "_lastName", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'email' }),
    __metadata("design:type", String)
], Career.prototype, "_email", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'phoneNumber' }),
    __metadata("design:type", String)
], Career.prototype, "_phoneNumber", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'address' }),
    __metadata("design:type", String)
], Career.prototype, "_address", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'applyFor' }),
    __metadata("design:type", String)
], Career.prototype, "_applyFor", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'experience' }),
    __metadata("design:type", String)
], Career.prototype, "_experience", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'currentCTC' }),
    __metadata("design:type", String)
], Career.prototype, "_currentCTC", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'expectedCTC' }),
    __metadata("design:type", String)
], Career.prototype, "_expectedCTC", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "files" }),
    __metadata("design:type", Array)
], Career.prototype, "_files", void 0);
exports.default = Career;
