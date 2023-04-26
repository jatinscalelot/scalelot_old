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
const PortfolioProject_1 = __importDefault(require("../dto/PortfolioProject"));
const AppUtils_1 = __importDefault(require("../utils/AppUtils"));
const class_transformer_1 = require("class-transformer");
const PortfolioProjectsEntity_1 = __importDefault(require("./entity/PortfolioProjectsEntity"));
let PortfolioProjectRepository = class PortfolioProjectRepository {
    async addPortfolioProject(portfolioProject) {
        const portfolioProjectEntity = new PortfolioProjectsEntity_1.default(AppUtils_1.default.nullPropsRemover((0, class_transformer_1.instanceToPlain)(portfolioProject)));
        await portfolioProjectEntity.save();
        return (0, class_transformer_1.plainToInstance)(PortfolioProject_1.default, portfolioProjectEntity, { excludeExtraneousValues: true });
    }
    async getAllPortfolioProjects() {
        let result = await PortfolioProjectsEntity_1.default.aggregate([{
                "$lookup": {
                    from: 'files',
                    localField: 'files',
                    foreignField: '_id',
                    as: 'images'
                }
            }]);
        return (0, class_transformer_1.plainToInstance)(PortfolioProject_1.default, result, { excludeExtraneousValues: true });
    }
};
PortfolioProjectRepository = __decorate([
    (0, tsyringe_1.autoInjectable)()
], PortfolioProjectRepository);
exports.default = PortfolioProjectRepository;
