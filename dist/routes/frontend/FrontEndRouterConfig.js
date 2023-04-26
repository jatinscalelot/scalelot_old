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
const express_1 = __importDefault(require("express"));
const tsyringe_1 = require("tsyringe");
const FrontEndBeanConfig_1 = __importDefault(require("../../config/FrontEndBeanConfig"));
let FrontEndRouterConfig = class FrontEndRouterConfig {
    constructor(frontEndBeanConfig) {
        this.router = express_1.default.Router();
        this.frontEndBeanConfig = frontEndBeanConfig;
        this.isConfigured = false;
    }
    configureAdminRoutes() {
        this.router.use('/admin', this.frontEndBeanConfig.adminController.routes());
    }
    configureBaseRoutes() {
        this.router.use('/', this.frontEndBeanConfig.baseController.routes());
    }
    configureServiceRoutes() {
        const serviceRouter = express_1.default.Router();
        const appDevelopmentRouter = express_1.default.Router({ mergeParams: true });
        const digitalMarketingRouter = express_1.default.Router({ mergeParams: true });
        const graphicDesignRouter = express_1.default.Router({ mergeParams: true });
        const salesFunnelRouter = express_1.default.Router({ mergeParams: true });
        const uiUxDesignRouter = express_1.default.Router({ mergeParams: true });
        const webDevelopmentRouter = express_1.default.Router({ mergeParams: true });
        serviceRouter.use('/', appDevelopmentRouter);
        serviceRouter.use('/', digitalMarketingRouter);
        serviceRouter.use('/', graphicDesignRouter);
        serviceRouter.use('/', salesFunnelRouter);
        serviceRouter.use('/', uiUxDesignRouter);
        serviceRouter.use('/', webDevelopmentRouter);
        serviceRouter.use('/', this.frontEndBeanConfig.servicesController.routes());
        appDevelopmentRouter.use('/mobile-app-development', this.frontEndBeanConfig.appDevelopmentController.routes());
        digitalMarketingRouter.use('/digital-marketing', this.frontEndBeanConfig.digitalMarketingController.routes());
        graphicDesignRouter.use('/graphic-design', this.frontEndBeanConfig.graphicDesignController.routes());
        salesFunnelRouter.use('/sales-funnels-design', this.frontEndBeanConfig.salesFunnelDesignController.routes());
        uiUxDesignRouter.use('/ui-ux-design', this.frontEndBeanConfig.uiUxDesignController.routes());
        webDevelopmentRouter.use('/web-development', this.frontEndBeanConfig.webDeveleopmentController.routes());
        this.router.use('/services', serviceRouter);
    }
    configureWorkRoutes() {
        this.router.use('/work', this.frontEndBeanConfig.workController.routes());
    }
    getRouter() {
        if (this.isConfigured) {
            return this.router;
        }
        this.configureBaseRoutes();
        this.configureAdminRoutes();
        this.configureServiceRoutes();
        this.configureWorkRoutes();
        this.isConfigured = true;
        return this.router;
    }
};
FrontEndRouterConfig = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    __metadata("design:paramtypes", [FrontEndBeanConfig_1.default])
], FrontEndRouterConfig);
exports.default = FrontEndRouterConfig;
