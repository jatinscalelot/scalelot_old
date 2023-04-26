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
const PriorityEnum_1 = require("../utils/enum/PriorityEnum");
class PortfolioProject {
    constructor(id, title, category, pageLink, rating, description, webFramework, programmingLanguages, miscellaneous, libraries, uiFrameworks, designingLanguage, designingTools, tags, priority, files) {
        this._id = id;
        this._title = title;
        this._category = category;
        this._pageLink = pageLink;
        this._rating = rating;
        this._description = description;
        this._webFramework = webFramework;
        this._programmingLanguages = programmingLanguages;
        this._miscellaneous = miscellaneous;
        this._libraries = libraries;
        this._uiFrameworks = uiFrameworks;
        this._designingLanguage = designingLanguage;
        this._designingTools = designingTools;
        this._tags = tags;
        this._priority = priority;
        this._files = files;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get category() {
        return this._category;
    }
    set category(value) {
        this._category = value;
    }
    get pageLink() {
        return this._pageLink;
    }
    set pageLink(value) {
        this._pageLink = value;
    }
    get rating() {
        return this._rating;
    }
    set rating(value) {
        this._rating = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get webFramework() {
        return this._webFramework;
    }
    set webFramework(value) {
        this._webFramework = value;
    }
    get programmingLanguages() {
        return this._programmingLanguages;
    }
    set programmingLanguages(value) {
        this._programmingLanguages = value;
    }
    get miscellaneous() {
        return this._miscellaneous;
    }
    set miscellaneous(value) {
        this._miscellaneous = value;
    }
    get libraries() {
        return this._libraries;
    }
    set libraries(value) {
        this._libraries = value;
    }
    get uiFrameworks() {
        return this._uiFrameworks;
    }
    set uiFrameworks(value) {
        this._uiFrameworks = value;
    }
    get designingLanguage() {
        return this._designingLanguage;
    }
    set designingLanguage(value) {
        this._designingLanguage = value;
    }
    get designingTools() {
        return this._designingTools;
    }
    set designingTools(value) {
        this._designingTools = value;
    }
    get files() {
        return this._files;
    }
    set files(value) {
        this._files = value;
    }
    get priority() {
        return this._priority;
    }
    set priority(value) {
        this._priority = value;
    }
    get tags() {
        return this._tags;
    }
    set tags(value) {
        this._tags = value;
    }
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(param => param.obj ? param.obj._id : null, { toClassOnly: true }),
    (0, class_transformer_1.Transform)(param => param.obj && param.obj._id ? param.obj._id.toString() : null, { toPlainOnly: true }),
    __metadata("design:type", mongoose_1.default.Types.ObjectId)
], PortfolioProject.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "title" }),
    __metadata("design:type", String)
], PortfolioProject.prototype, "_title", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "category" }),
    __metadata("design:type", String)
], PortfolioProject.prototype, "_category", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "pageLink" }),
    __metadata("design:type", String)
], PortfolioProject.prototype, "_pageLink", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "rating" }),
    __metadata("design:type", String)
], PortfolioProject.prototype, "_rating", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "description" }),
    __metadata("design:type", String)
], PortfolioProject.prototype, "_description", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "webFramework" }),
    __metadata("design:type", Array)
], PortfolioProject.prototype, "_webFramework", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "programmingLanguages" }),
    __metadata("design:type", Array)
], PortfolioProject.prototype, "_programmingLanguages", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "miscellaneous" }),
    __metadata("design:type", Array)
], PortfolioProject.prototype, "_miscellaneous", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "libraries" }),
    __metadata("design:type", Array)
], PortfolioProject.prototype, "_libraries", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "uiFrameworks" }),
    __metadata("design:type", Array)
], PortfolioProject.prototype, "_uiFrameworks", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "designingLanguage" }),
    __metadata("design:type", Array)
], PortfolioProject.prototype, "_designingLanguage", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "designingTools" }),
    __metadata("design:type", String)
], PortfolioProject.prototype, "_designingTools", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "tags" }),
    __metadata("design:type", Array)
], PortfolioProject.prototype, "_tags", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "priority" }),
    __metadata("design:type", String)
], PortfolioProject.prototype, "_priority", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "files" }),
    __metadata("design:type", Array)
], PortfolioProject.prototype, "_files", void 0);
exports.default = PortfolioProject;
