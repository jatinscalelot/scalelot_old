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
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const BeanConfig_1 = __importDefault(require("../../config/BeanConfig"));
let RouterConfig = class RouterConfig {
    constructor(beanConfig) {
        this.router = express_1.default.Router();
        this.beanConfig = beanConfig;
        this.isConfigured = false;
    }
    configureCareerRoutes() {
        this.router.use('/career', this.beanConfig.careerController.routes());
        this.router.use('/login', this.beanConfig.loginController.routes());
        this.router.use('/contact-us', this.beanConfig.contactUsController.routes());
        this.router.use('/meta-keywords', this.beanConfig.metaKeywordsController.routes());
        this.router.use('/portfolio-project', this.beanConfig.portfolioProjectController.routes());
        this.router.use('/testimonial', this.beanConfig.testimonialController.routes());
    }
    getRouter() {
        if (this.isConfigured) {
            return this.router;
        }
        this.configureCareerRoutes();
        this.isConfigured = true;
        return this.router;
    }
};
RouterConfig = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [BeanConfig_1.default])
], RouterConfig);
exports.default = RouterConfig;
