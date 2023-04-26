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
const BaseRoutesController_1 = __importDefault(require("../routes/frontend/v1/base/BaseRoutesController"));
const AdminController_1 = __importDefault(require("../routes/frontend/v1/admin/AdminController"));
const ServicesController_1 = __importDefault(require("../routes/frontend/v1/services/ServicesController"));
const AppDevelopmentController_1 = __importDefault(require("../routes/frontend/v1/services/appdevelopment/AppDevelopmentController"));
const DigitalMarketingController_1 = __importDefault(require("../routes/frontend/v1/services/digitalmarketing/DigitalMarketingController"));
const GraphicDesignController_1 = __importDefault(require("../routes/frontend/v1/services/graphicdesign/GraphicDesignController"));
const SalesFunnelDesignController_1 = __importDefault(require("../routes/frontend/v1/services/salesfunneldesign/SalesFunnelDesignController"));
const UiUxDesignController_1 = __importDefault(require("../routes/frontend/v1/services/uiuxdesign/UiUxDesignController"));
const WebDevelopmentController_1 = __importDefault(require("../routes/frontend/v1/services/webdevelopment/WebDevelopmentController"));
const WorkController_1 = __importDefault(require("../routes/frontend/v1/work/WorkController"));
let FrontEndBeanConfig = class FrontEndBeanConfig {
    constructor() {
        this._adminController = tsyringe_1.container.resolve(AdminController_1.default);
        this._baseController = tsyringe_1.container.resolve(BaseRoutesController_1.default);
        this._servicesController = tsyringe_1.container.resolve(ServicesController_1.default);
        this._appDevelopmentController = tsyringe_1.container.resolve(AppDevelopmentController_1.default);
        this._digitalMarketingController = tsyringe_1.container.resolve(DigitalMarketingController_1.default);
        this._graphicDesignController = tsyringe_1.container.resolve(GraphicDesignController_1.default);
        this._salesFunnelDesignController = tsyringe_1.container.resolve(SalesFunnelDesignController_1.default);
        this._uiUxDesignController = tsyringe_1.container.resolve(UiUxDesignController_1.default);
        this._webDeveleopmentController = tsyringe_1.container.resolve(WebDevelopmentController_1.default);
        this._workController = tsyringe_1.container.resolve(WorkController_1.default);
    }
    get adminController() {
        return this._adminController;
    }
    get baseController() {
        return this._baseController;
    }
    get servicesController() {
        return this._servicesController;
    }
    get appDevelopmentController() {
        return this._appDevelopmentController;
    }
    get digitalMarketingController() {
        return this._digitalMarketingController;
    }
    get graphicDesignController() {
        return this._graphicDesignController;
    }
    get salesFunnelDesignController() {
        return this._salesFunnelDesignController;
    }
    get uiUxDesignController() {
        return this._uiUxDesignController;
    }
    get webDeveleopmentController() {
        return this._webDeveleopmentController;
    }
    get workController() {
        return this._workController;
    }
};
FrontEndBeanConfig = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], FrontEndBeanConfig);
exports.default = FrontEndBeanConfig;
