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
const CareerController_1 = __importDefault(require("../routes/v1/career/CareerController"));
const tsyringe_1 = require("tsyringe");
const LoginController_1 = __importDefault(require("../routes/v1/login/LoginController"));
const ContactUsController_1 = __importDefault(require("../routes/v1/contactus/ContactUsController"));
const MetaKeywordsController_1 = __importDefault(require("../routes/v1/metakeywords/MetaKeywordsController"));
const PortfolioProjectConrtroller_1 = __importDefault(require("../routes/v1/portfolioproject/PortfolioProjectConrtroller"));
const TestimonialController_1 = __importDefault(require("../routes/v1/testimonial/TestimonialController"));
let BeanConfig = class BeanConfig {
    constructor() {
        this._careerController = tsyringe_1.container.resolve(CareerController_1.default);
        this._loginController = tsyringe_1.container.resolve(LoginController_1.default);
        this._contactUsController = tsyringe_1.container.resolve(ContactUsController_1.default);
        this._metaKeywordsController = tsyringe_1.container.resolve(MetaKeywordsController_1.default);
        this._portfolioProjectController = tsyringe_1.container.resolve(PortfolioProjectConrtroller_1.default);
        this._testimonialController = tsyringe_1.container.resolve(TestimonialController_1.default);
    }
    get careerController() {
        return this._careerController;
    }
    get loginController() {
        return this._loginController;
    }
    get contactUsController() {
        return this._contactUsController;
    }
    get metaKeywordsController() {
        return this._metaKeywordsController;
    }
    get portfolioProjectController() {
        return this._portfolioProjectController;
    }
    get testimonialController() {
        return this._testimonialController;
    }
};
BeanConfig = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], BeanConfig);
exports.default = BeanConfig;
