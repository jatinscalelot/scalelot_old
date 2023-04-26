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
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
class ContactUs {
    constructor(id, name, companyName, email, phoneNumber, description, files) {
        this._id = id;
        this._name = name;
        this._companyName = companyName;
        this._email = email;
        this._phoneNumber = phoneNumber;
        this._description = description;
        this._files = files;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get companyName() {
        return this._companyName;
    }
    set companyName(value) {
        this._companyName = value;
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
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
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
    __metadata("design:type", String)
], ContactUs.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'name' }),
    __metadata("design:type", String)
], ContactUs.prototype, "_name", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'companyName' }),
    __metadata("design:type", String)
], ContactUs.prototype, "_companyName", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'email' }),
    __metadata("design:type", String)
], ContactUs.prototype, "_email", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'phoneNumber' }),
    __metadata("design:type", String)
], ContactUs.prototype, "_phoneNumber", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'description' }),
    __metadata("design:type", String)
], ContactUs.prototype, "_description", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "files" }),
    __metadata("design:type", Array)
], ContactUs.prototype, "_files", void 0);
exports.default = ContactUs;
