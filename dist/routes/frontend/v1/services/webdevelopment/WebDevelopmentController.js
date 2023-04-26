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
let WebDevelopmentController = class WebDevelopmentController {
    constructor(portfolioProjectService, testimonialService) {
        Logger_1.default.debug("Initializing Service WebDevelopment FrontEnd Routes");
        this._router = express_1.default.Router();
        this._testimonialService = testimonialService;
        this._portfolioProjectService = portfolioProjectService;
    }
    routes() {
        Logger_1.default.debug("Configuring routes for Services Web Development");
        this._router.get('/', (0, AsyncHandler_1.default)(async (req, res) => this.serveWebDev(req, res)));
        this._router.get('/angular-development', (0, AsyncHandler_1.default)(async (req, res) => this.serveAngularDev(req, res)));
        this._router.get('/reactjs-development', (0, AsyncHandler_1.default)(async (req, res) => this.serveReactDev(req, res)));
        this._router.get('/nodejs-development', (0, AsyncHandler_1.default)(async (req, res) => this.serveNodeDev(req, res)));
        this._router.get('/python-development', (0, AsyncHandler_1.default)(async (req, res) => this.servePythonDev(req, res)));
        this._router.get('/html5-development', (0, AsyncHandler_1.default)(async (req, res) => this.serveHtml5Dev(req, res)));
        this._router.get('/wordpress-development', (0, AsyncHandler_1.default)(async (req, res) => this.serveWordpressDev(req, res)));
        this._router.get('/magento-development', (0, AsyncHandler_1.default)(async (req, res) => this.serveMagentoDev(req, res)));
        this._router.get('/woocommerce-development', (0, AsyncHandler_1.default)(async (req, res) => this.serveWooComDev(req, res)));
        this._router.get('/shopify-development', (0, AsyncHandler_1.default)(async (req, res) => this.serveShopifyDev(req, res)));
        this._router.get('/cms-website-development', (0, AsyncHandler_1.default)(async (req, res) => this.serveCMSDev(req, res)));
        this._router.get('/mongodb-database-design', (0, AsyncHandler_1.default)(async (req, res) => this.serveMongoDBDesign(req, res)));
        this._router.get('/mysql-database-design', (0, AsyncHandler_1.default)(async (req, res) => this.serveMySqlDesign(req, res)));
        return this._router;
    }
    async serveWebDev(req, res) {
        let testimonials = await this._testimonialService.getAllTestimonials();
        let filteredTestimonials = testimonials.filter(testimonial => testimonial.tags == TestimonialTagsEnum_1.TestimonialTagsEnum.WEB_DEVELOPMENT);
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.WEB_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/web-development', { title: 'Express', portfolios: filteredPortfolioProjects, testimonials: filteredTestimonials });
    }
    async serveAngularDev(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.WEB_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/web-development/angular-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveReactDev(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.WEB_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/web-development/react-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveNodeDev(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.WEB_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/web-development/node-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async servePythonDev(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.WEB_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/web-development/python-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveHtml5Dev(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.WEB_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/web-development/html5-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveWordpressDev(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.WEB_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/web-development/wordpress-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveMagentoDev(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.WEB_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/web-development/magento-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveWooComDev(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.WEB_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/web-development/woo-commerce-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveShopifyDev(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.WEB_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/web-development/shopify-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveCMSDev(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.WEB_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/web-development/cms-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveMongoDBDesign(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.WEB_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/web-development/mongodb-design', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async serveMySqlDesign(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.WEB_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/web-development/mysql-database', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
};
WebDevelopmentController = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [PortfolioProjectService_1.default, TestimonialService_1.default])
], WebDevelopmentController);
exports.default = WebDevelopmentController;
