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
const PortfolioTagsEnum_1 = require("../../../../utils/enum/PortfolioTagsEnum");
const TestimonialService_1 = __importDefault(require("../../../../service/TestimonialService"));
let WorkController = class WorkController {
    constructor(portfolioProjectService, testimonialService) {
        Logger_1.default.debug("Initializing Work FrontEnd Routes");
        this._router = express_1.default.Router();
        this._portfolioProjectService = portfolioProjectService;
        this._testimonialService = testimonialService;
    }
    routes() {
        Logger_1.default.debug("Configuring routes for Work");
        this._router.get('/', (0, AsyncHandler_1.default)(async (req, res) => this.serveWork(req, res)));
        this._router.get('/portfolio', (0, AsyncHandler_1.default)(async (req, res) => this.servePortfolio(req, res)));
        this._router.get('/testimonials', (0, AsyncHandler_1.default)(async (req, res) => this.serveTestimonials(req, res)));
        return this._router;
    }
    async serveWork(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum_1.PortfolioTagsEnum.INDEX) >= 0 ? true : false;
        });
        return res.render('work', { title: 'Express', portfolios: filteredPortfolioProjects });
    }
    async servePortfolio(req, res) {
        let portfolioProjects = await this._portfolioProjectService.getAllPortfolio();
        return res.render('work/portfolio', { title: 'Express', portfolios: portfolioProjects });
    }
    async serveTestimonials(req, res) {
        let testimonials = await this._testimonialService.getAllTestimonials();
        return res.render('work/testimonials', { title: 'Express', testimonials: testimonials });
    }
};
WorkController = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [PortfolioProjectService_1.default, TestimonialService_1.default])
], WorkController);
exports.default = WorkController;
