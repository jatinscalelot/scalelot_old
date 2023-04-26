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
const AppUtils_1 = __importDefault(require("../utils/AppUtils"));
const class_transformer_1 = require("class-transformer");
const MetaKeywords_1 = __importDefault(require("../dto/MetaKeywords"));
const MetaKeywordsEntity_1 = __importDefault(require("./entity/MetaKeywordsEntity"));
let MetaKeywordsRepository = class MetaKeywordsRepository {
    async saveMetaKeywords(metaKeywords) {
        const contactUsEntity = new MetaKeywordsEntity_1.default(AppUtils_1.default.nullPropsRemover((0, class_transformer_1.instanceToPlain)(metaKeywords)));
        await contactUsEntity.save();
        return (0, class_transformer_1.plainToInstance)(MetaKeywords_1.default, contactUsEntity, { excludeExtraneousValues: true });
    }
};
MetaKeywordsRepository = __decorate([
    (0, tsyringe_1.autoInjectable)()
], MetaKeywordsRepository);
exports.default = MetaKeywordsRepository;
