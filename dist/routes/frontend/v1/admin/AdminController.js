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
let AdminController = class AdminController {
    constructor() {
        Logger_1.default.debug("Initializing Admin FrontEnd Routes");
        this._router = express_1.default.Router();
    }
    routes() {
        Logger_1.default.debug("Configuring routes for Admin");
        this._router.get('/', (0, AsyncHandler_1.default)(async (req, res) => this.serveAdmin(req, res)));
        this._router.get('/addMeta', (0, AsyncHandler_1.default)(async (req, res) => this.serveAddMeta(req, res)));
        this._router.get('/addPortfolio', (0, AsyncHandler_1.default)(async (req, res) => this.serveAddPortfolio(req, res)));
        this._router.get('/AddTestimonial', (0, AsyncHandler_1.default)(async (req, res) => this.serveAddTestimonial(req, res)));
        this._router.get('/dashboard', (0, AsyncHandler_1.default)(async (req, res) => this.serveDashboard(req, res)));
        return this._router;
    }
    async serveAdmin(req, res) {
        return res.render('admin/login', { title: 'Express' });
    }
    async serveAddMeta(req, res) {
        return res.render('admin/add_meta', { title: 'Express' });
    }
    async serveAddPortfolio(req, res) {
        return res.render('admin/add_portfolio', { title: 'Express' });
    }
    async serveAddTestimonial(req, res) {
        return res.render('admin/add_testimonial', { title: 'Express' });
    }
    async serveDashboard(req, res) {
        return res.render('admin/dashboard', { title: 'Express' });
    }
};
AdminController = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [])
], AdminController);
exports.default = AdminController;
