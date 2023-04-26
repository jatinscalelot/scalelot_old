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
class MetaKeywords {
    constructor(id, country, page, keywords) {
        this._id = id;
        this._country = country;
        this._page = page;
        this._keywords = keywords;
    }
    get id() {
        return this._id;
    }
    get country() {
        return this._country;
    }
    set country(value) {
        this._country = value;
    }
    get page() {
        return this._page;
    }
    set page(value) {
        this._page = value;
    }
    get keywords() {
        return this._keywords;
    }
    set keywords(value) {
        this._keywords = value;
    }
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(param => param.obj ? param.obj.id : null, { toClassOnly: true }),
    __metadata("design:type", mongoose_1.default.Types.ObjectId)
], MetaKeywords.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "country" }),
    __metadata("design:type", String)
], MetaKeywords.prototype, "_country", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "page" }),
    __metadata("design:type", String)
], MetaKeywords.prototype, "_page", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "keywords" }),
    __metadata("design:type", String)
], MetaKeywords.prototype, "_keywords", void 0);
exports.default = MetaKeywords;
