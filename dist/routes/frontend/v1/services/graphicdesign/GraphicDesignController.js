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
let GraphicDesignController = class GraphicDesignController {
    constructor(portfolioProjectService, testimonialService) {
        Logger_1.default.debug("Initializing Service Graphic Design FrontEnd Routes");
        this._router = express_1.default.Router();
        this._testimonialService = testimonialService;
        this._portfolioProjectService = portfolioProjectService;
    }
    routes() {
        Logger_1.default.debug("Configuring routes for Services Graphic Design");
        this._router.get('/', (0, AsyncHandler_1.default)(async (req, res) => this.serveGraphicDesign(req, res)));
        this._router.get('/logo-design', (0, AsyncHandler_1.default)(async (req, res) => this.serveLogoDesign(req, res)));
        this._router.get('/branding-design', (0, AsyncHandler_1.default)(async (req, res) => this.serveBrandingDesign(req, res)));
        this._router.get('/mockups-design', (0, AsyncHandler_1.default)(async (req, res) => this.serveMockupDesign(req, res)));
        this._router.get('/infographic-design', (0, AsyncHandler_1.default)(async (req, res) => this.serveInfoGraphicDesign(req, res)));
        this._router.get('/social-media-post-design', (0, AsyncHandler_1.default)(async (req, res) => this.serveSMPostDesign(req, res)));
        this._router.get('/banner-design', (0, AsyncHandler_1.default)(async (req, res) => this.serveBannerDesign(req, res)));
        return this._router;
    }
    async serveGraphicDesign(req, res) {
        let testimonials = await this._testimonialService.getAllTestimonials();
        let filteredTestimonials = testimonials.filter(testimonial => testimonial.tags == TestimonialTagsEnum_1.TestimonialTagsEnum.GRAPHIC_DESIGN);
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.GRAPHIC_DESIGN) >= 0 ? true : false;
        });
        return res.render('services/graphics-design', { title: 'Express', portfolios: filteredPortfolioProjects, testimonials: filteredTestimonials });
    }
    async serveLogoDesign(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.GRAPHIC_DESIGN) >= 0 ? true : false;
        });
        return res.render('services/graphics-design/logo-design', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveBrandingDesign(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.GRAPHIC_DESIGN) >= 0 ? true : false;
        });
        return res.render('services/graphics-design/branding-design', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveMockupDesign(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.GRAPHIC_DESIGN) >= 0 ? true : false;
        });
        return res.render('services/graphics-design/mockups-design', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveInfoGraphicDesign(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.GRAPHIC_DESIGN) >= 0 ? true : false;
        });
        return res.render('services/graphics-design/infographic-design', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveSMPostDesign(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.GRAPHIC_DESIGN) >= 0 ? true : false;
        });
        return res.render('services/graphics-design/social-media-design', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveBannerDesign(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.GRAPHIC_DESIGN) >= 0 ? true : false;
        });
        return res.render('services/graphics-design/banner-card-design', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
};
GraphicDesignController = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [PortfolioProjectService_1.default, TestimonialService_1.default])
], GraphicDesignController);
exports.default = GraphicDesignController;
