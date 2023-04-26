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
class Testimonial {
    constructor(id, rating, clientName, clientDesignation, review, tags, files) {
        this._id = id;
        this._rating = rating;
        this._clientName = clientName;
        this._clientDesignation = clientDesignation;
        this._review = review;
        this._tags = tags;
        this._files = files;
    }
    get id() {
        return this._id;
    }
    get rating() {
        return this._rating;
    }
    set rating(value) {
        this._rating = value;
    }
    get clientName() {
        return this._clientName;
    }
    set clientName(value) {
        this._clientName = value;
    }
    get clientDesignation() {
        return this._clientDesignation;
    }
    set clientDesignation(value) {
        this._clientDesignation = value;
    }
    get review() {
        return this._review;
    }
    set review(value) {
        this._review = value;
    }
    get tags() {
        return this._tags;
    }
    set tags(value) {
        this._tags = value;
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
    (0, class_transformer_1.Transform)(param => param.obj && param.obj._id ? param.obj._id.toString() : null, { toPlainOnly: true }),
    __metadata("design:type", String)
], Testimonial.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'rating' }),
    __metadata("design:type", String)
], Testimonial.prototype, "_rating", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'clientName' }),
    __metadata("design:type", String)
], Testimonial.prototype, "_clientName", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'clientDesignation' }),
    __metadata("design:type", String)
], Testimonial.prototype, "_clientDesignation", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'review' }),
    __metadata("design:type", String)
], Testimonial.prototype, "_review", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'tags' }),
    __metadata("design:type", String)
], Testimonial.prototype, "_tags", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "files" }),
    __metadata("design:type", Array)
], Testimonial.prototype, "_files", void 0);
exports.default = Testimonial;
