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
let SalesFunnelDesignController = class SalesFunnelDesignController {
    constructor(portfolioProjectService, testimonialService) {
        Logger_1.default.debug("Initializing Service Sales Funnel FrontEnd Routes");
        this._router = express_1.default.Router();
        this._testimonialService = testimonialService;
        this._portfolioProjectService = portfolioProjectService;
    }
    routes() {
        Logger_1.default.debug("Configuring routes for Services Sales Funnel");
        this._router.get('/', (0, AsyncHandler_1.default)(async (req, res) => this.serveSalesFunnelDesign(req, res)));
        this._router.get('/unbounce-landing-page-development', (0, AsyncHandler_1.default)(async (req, res) => this.serveULPDev(req, res)));
        this._router.get('/click-funnels-development', (0, AsyncHandler_1.default)(async (req, res) => this.serveClickFunnel(req, res)));
        this._router.get('/instapage-landing-page-development', (0, AsyncHandler_1.default)(async (req, res) => this.serveInstaLandingPageDev(req, res)));
        this._router.get('/hubspot-development', (0, AsyncHandler_1.default)(async (req, res) => this.serveHubspotDev(req, res)));
        return this._router;
    }
    async serveSalesFunnelDesign(req, res) {
        let testimonials = await this._testimonialService.getAllTestimonials();
        let filteredTestimonials = testimonials.filter(testimonial => testimonial.tags == TestimonialTagsEnum_1.TestimonialTagsEnum.SALES_FUNNELS);
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.SALES_FUNNELS) >= 0 ? true : false;
        });
        return res.render('services/sales-funnel', { title: 'Express', portfolios: filteredPortfolioProjects, testimonials: filteredTestimonials });
    }
    async serveULPDev(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.SALES_FUNNELS) >= 0 ? true : false;
        });
        return res.render('services/sales-funnel/unbounce', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveClickFunnel(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.SALES_FUNNELS) >= 0 ? true : false;
        });
        return res.render('services/sales-funnel/click-funnels', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveInstaLandingPageDev(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.SALES_FUNNELS) >= 0 ? true : false;
        });
        return res.render('services/sales-funnel/instapage', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveHubspotDev(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.SALES_FUNNELS) >= 0 ? true : false;
        });
        return res.render('services/sales-funnel/hubspot', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
};
SalesFunnelDesignController = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [PortfolioProjectService_1.default, TestimonialService_1.default])
], SalesFunnelDesignController);
exports.default = SalesFunnelDesignController;
