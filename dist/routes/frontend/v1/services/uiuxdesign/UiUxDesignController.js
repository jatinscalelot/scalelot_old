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
const TestimonialService_1 = __importDefault(require("../../../../../service/TestimonialService"));
const TestimonialTagsEnum_1 = require("../../../../../utils/enum/TestimonialTagsEnum");
const PortfolioProjectService_1 = __importDefault(require("../../../../../service/PortfolioProjectService"));
const PortfolioTagsEnum_1 = require("../../../../../utils/enum/PortfolioTagsEnum");
let UiUxDesignController = class UiUxDesignController {
    constructor(portfolioProjectService, testimonialService) {
        Logger_1.default.debug("Initializing Service UI/UX Design FrontEnd Routes");
        this._router = express_1.default.Router();
        this._testimonialService = testimonialService;
        this._portfolioProjectService = portfolioProjectService;
    }
    routes() {
        Logger_1.default.debug("Configuring routes for Services UI/UX Design");
        this._router.get('/', (0, AsyncHandler_1.default)(async (req, res) => this.serveUiUxDesign(req, res)));
        this._router.get('/mobile-app-design', (0, AsyncHandler_1.default)(async (req, res) => this.serveMobileAppDesign(req, res)));
        this._router.get('/website-design', (0, AsyncHandler_1.default)(async (req, res) => this.serveWebsiteDesign(req, res)));
        this._router.get('/web-app-design', (0, AsyncHandler_1.default)(async (req, res) => this.serveWebAppDesign(req, res)));
        this._router.get('/sales-funnels-design', (0, AsyncHandler_1.default)(async (req, res) => this.serveSalesFunnelDesign(req, res)));
        this._router.get('/game-design', (0, AsyncHandler_1.default)(async (req, res) => this.serveGameDesign(req, res)));
        this._router.get('/website-revamp-design', (0, AsyncHandler_1.default)(async (req, res) => this.serveWebRevampDesign(req, res)));
        return this._router;
    }
    async serveUiUxDesign(req, res) {
        let testimonials = await this._testimonialService.getAllTestimonials();
        let filteredTestimonials = testimonials.filter(testimonial => testimonial.tags == TestimonialTagsEnum_1.TestimonialTagsEnum.UI_UX_DESIGN);
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.UI_UX_DESIGN) >= 0 ? true : false;
        });
        return res.render('services/uiuxdesign', { title: 'Express', portfolios: filteredPortfolioProjects, testimonials: filteredTestimonials });
    }
    async serveMobileAppDesign(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.UI_UX_DESIGN) >= 0 ? true : false;
        });
        return res.render('services/uiuxdesign/mobile-application-design', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveWebsiteDesign(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.UI_UX_DESIGN) >= 0 ? true : false;
        });
        return res.render('services/uiuxdesign/website-design', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveWebAppDesign(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.UI_UX_DESIGN) >= 0 ? true : false;
        });
        return res.render('services/uiuxdesign/web-application-design', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveSalesFunnelDesign(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.UI_UX_DESIGN) >= 0 ? true : false;
        });
        return res.render('services/uiuxdesign/sales-funnels-design', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveGameDesign(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.UI_UX_DESIGN) >= 0 ? true : false;
        });
        return res.render('services/uiuxdesign/game-design', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveWebRevampDesign(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.UI_UX_DESIGN) >= 0 ? true : false;
        });
        return res.render('services/uiuxdesign/website-redesign', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
};
UiUxDesignController = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [PortfolioProjectService_1.default, TestimonialService_1.default])
], UiUxDesignController);
exports.default = UiUxDesignController;
