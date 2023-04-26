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
const tsyringe_1 = require("tsyringe");
const express_1 = __importDefault(require("express"));
const Logger_1 = __importDefault(require("../../../../../utils/Logger"));
const AsyncHandler_1 = __importDefault(require("../../../../../utils/AsyncHandler"));
const TestimonialTagsEnum_1 = require("../../../../../utils/enum/TestimonialTagsEnum");
const TestimonialService_1 = __importDefault(require("../../../../../service/TestimonialService"));
const PortfolioProjectService_1 = __importDefault(require("../../../../../service/PortfolioProjectService"));
const PortfolioTagsEnum_1 = require("../../../../../utils/enum/PortfolioTagsEnum");
let AppDevelopmentController = class AppDevelopmentController {
    constructor(portfolioProjectService, testimonialService) {
        Logger_1.default.debug("Initializing Service App Development FrontEnd Routes");
        this._router = express_1.default.Router();
        this._testimonialService = testimonialService;
        this._portfolioProjectService = portfolioProjectService;
    }
    routes() {
        Logger_1.default.debug("Configuring routes for Services App Development");
        this._router.get('/', (0, AsyncHandler_1.default)(async (req, res) => this.serveAppDev(req, res)));
        this._router.get('/ios-app-development', (0, AsyncHandler_1.default)(async (req, res) => this.serveIosAppDev(req, res)));
        this._router.get('/android-app-development', (0, AsyncHandler_1.default)(async (req, res) => this.serveAndroidAppDev(req, res)));
        this._router.get('/hybrid-app-development', (0, AsyncHandler_1.default)(async (req, res) => this.serveHybridAppDev(req, res)));
        this._router.get('/flutter-app-development', (0, AsyncHandler_1.default)(async (req, res) => this.serveFlutterAppDev(req, res)));
        this._router.get('/react-native-app-development', (0, AsyncHandler_1.default)(async (req, res) => this.serveReactNativeAppDev(req, res)));
        return this._router;
    }
    async serveAppDev(req, res) {
        let testimonials = await this._testimonialService.getAllTestimonials();
        let filteredTestimonials = testimonials.filter(testimonial => testimonial.tags == TestimonialTagsEnum_1.TestimonialTagsEnum.APP_DEVELOPMENT);
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.APP_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/mobile-application-development', { title: 'Express', portfolios: filteredPortfolioProjects, testimonials: filteredTestimonials });
    }
    async serveIosAppDev(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.APP_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/mobile-app-development/ios-native-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveAndroidAppDev(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.APP_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/mobile-app-development/android-app-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveHybridAppDev(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.APP_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/mobile-app-development/hybrid-app-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveFlutterAppDev(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.APP_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/mobile-app-development/flutter-app-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveReactNativeAppDev(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.APP_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/mobile-app-development/react-native-app-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
};
AppDevelopmentController = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [PortfolioProjectService_1.default, TestimonialService_1.default])
], AppDevelopmentController);
exports.default = AppDevelopmentController;
