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
const TestimonialService_1 = __importDefault(require("../../../../service/TestimonialService"));
let ServicesController = class ServicesController {
    constructor(testimonialService) {
        Logger_1.default.debug("Initializing Service FrontEnd Routes");
        this._router = express_1.default.Router();
        this._testimonialService = testimonialService;
    }
    routes() {
        Logger_1.default.debug("Configuring routes for Services");
        this._router.get('/', (0, AsyncHandler_1.default)(async (req, res) => this.serveServices(req, res)));
        return this._router;
    }
    async serveServices(req, res) {
        let testimonials = await this._testimonialService.getAllTestimonials();
        return res.render('services', { title: 'Express', testimonials: testimonials });
    }
};
ServicesController = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [TestimonialService_1.default])
], ServicesController);
exports.default = ServicesController;
