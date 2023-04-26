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
const Logger_1 = __importDefault(require("../../../../utils/Logger"));
const AsyncHandler_1 = __importDefault(require("../../../../utils/AsyncHandler"));
const PortfolioProjectService_1 = __importDefault(require("../../../../service/PortfolioProjectService"));
const TestimonialService_1 = __importDefault(require("../../../../service/TestimonialService"));
const PortfolioTagsEnum_1 = require("../../../../utils/enum/PortfolioTagsEnum");
let BaseController = class BaseController {
    constructor(portfolioProjectService, testimonialService) {
        Logger_1.default.debug("Initializing Base FrontEnd Routes");
        this._router = express_1.default.Router();
        this._portfolioProjectService = portfolioProjectService;
        this._testimonialService = testimonialService;
    }
    routes() {
        Logger_1.default.debug("Configuring routes for Base");
        this._router.get('/', (0, AsyncHandler_1.default)(async (req, res) => this.serveIndex(req, res)));
        this._router.get('/about-us', (0, AsyncHandler_1.default)(async (req, res) => this.serveAboutUs(req, res)));
        this._router.get('/career', (0, AsyncHandler_1.default)(async (req, res) => this.serveCareer(req, res)));
        // this._router.get('/how-we-work', AsyncHandler(async (req:any, res:any) => this.serveHowWeWork(req, res)));
        this._router.get('/blog', (0, AsyncHandler_1.default)(async (req, res) => this.serveBlog(req, res)));
        this._router.get('/faq', (0, AsyncHandler_1.default)(async (req, res) => this.serveFaq(req, res)));
        this._router.get('/offshore', (0, AsyncHandler_1.default)(async (req, res) => this.serveOffshore(req, res)));
        this._router.get('/contact', (0, AsyncHandler_1.default)(async (req, res) => this.serveContact(req, res)));
        this._router.get('/contact-us', (0, AsyncHandler_1.default)(async (req, res) => this.serveContactUs(req, res)));
        this._router.get('/html-sitemap', (0, AsyncHandler_1.default)(async (req, res) => this.serveHtmlSiteMap(req, res)));
        this._router.get('/thanks', (0, AsyncHandler_1.default)(async (req, res) => this.serveThanksMap(req, res)));
        return this._router;
    }
    async serveIndex(req, res) {
        Logger_1.default.debug("Need to return index");
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let testimonials = await this._testimonialService.getAllTestimonials();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.INDEX) >= 0 ? true : false;
        });
        return res.render('index', { title: 'Express', portfolios: filteredPortfolioProjects, testimonials: testimonials });
    }
    async serveAboutUs(req, res) {
        return res.render('aboutus', { title: 'Express' });
    }
    async serveCareer(req, res) {
        return res.render('career', { title: 'Express' });
    }
    // private async serveHowWeWork(req: any, res: any) {
    //     return res.render('how-we-work', { title: 'Express' });
    // }
    async serveBlog(req, res) {
        return res.render('blog', { title: 'Express' });
    }
    async serveFaq(req, res) {
        return res.render('faq', { title: 'Express' });
    }
    async serveOffshore(req, res) {
        return res.render('offshore', { title: 'Express' });
    }
    async serveContact(req, res) {
        return res.redirect('/contact-us');
    }
    async serveContactUs(req, res) {
        return res.render('contact', { title: 'Express' });
    }
    async serveHtmlSiteMap(req, res) {
        return res.render('html-sitemap', { title: 'Express' });
    }
    async serveThanksMap(req, res) {
        return res.render('thanks', { title: 'Express' });
    }
};
BaseController = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [PortfolioProjectService_1.default, TestimonialService_1.default])
], BaseController);
exports.default = BaseController;
