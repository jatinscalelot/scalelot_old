import {autoInjectable, container, singleton} from "tsyringe";
import BaseController from "../routes/frontend/v1/base/BaseRoutesController";
import AdminController from "../routes/frontend/v1/admin/AdminController";
import ServicesController from "../routes/frontend/v1/services/ServicesController";
import AppDevelopmentController from "../routes/frontend/v1/services/appdevelopment/AppDevelopmentController";
import DigitalMarketingController from "../routes/frontend/v1/services/digitalmarketing/DigitalMarketingController";
import GraphicDesignController from "../routes/frontend/v1/services/graphicdesign/GraphicDesignController";
import SalesFunnelDesignController from "../routes/frontend/v1/services/salesfunneldesign/SalesFunnelDesignController";
import UiUxDesignController from "../routes/frontend/v1/services/uiuxdesign/UiUxDesignController";
import WebDevelopmentController from "../routes/frontend/v1/services/webdevelopment/WebDevelopmentController";
import WorkController from "../routes/frontend/v1/work/WorkController";

@singleton()
export default class FrontEndBeanConfig {
    private readonly _adminController: AdminController;
    private readonly _baseController: BaseController;
    private readonly _servicesController: ServicesController;
    private readonly _appDevelopmentController: AppDevelopmentController;
    private readonly _digitalMarketingController: DigitalMarketingController;
    private readonly _graphicDesignController: GraphicDesignController;
    private readonly _salesFunnelDesignController: SalesFunnelDesignController;
    private readonly _uiUxDesignController: UiUxDesignController;
    private readonly _webDeveleopmentController: WebDevelopmentController;
    private readonly _workController: WorkController;

    constructor() {
        this._adminController = container.resolve(AdminController);
        this._baseController = container.resolve(BaseController);
        this._servicesController = container.resolve(ServicesController);
        this._appDevelopmentController = container.resolve(AppDevelopmentController);
        this._digitalMarketingController = container.resolve(DigitalMarketingController);
        this._graphicDesignController = container.resolve(GraphicDesignController);
        this._salesFunnelDesignController = container.resolve(SalesFunnelDesignController);
        this._uiUxDesignController = container.resolve(UiUxDesignController);
        this._webDeveleopmentController = container.resolve(WebDevelopmentController);
        this._workController = container.resolve(WorkController);
    }

    get adminController(): AdminController {
        return this._adminController;
    }

    get baseController(): BaseController {
        return this._baseController;
    }

    get servicesController(): ServicesController {
        return this._servicesController;
    }

    get appDevelopmentController(): AppDevelopmentController {
        return this._appDevelopmentController;
    }

    get digitalMarketingController(): DigitalMarketingController {
        return this._digitalMarketingController;
    }

    get graphicDesignController(): GraphicDesignController {
        return this._graphicDesignController;
    }

    get salesFunnelDesignController(): SalesFunnelDesignController {
        return this._salesFunnelDesignController;
    }

    get uiUxDesignController(): UiUxDesignController {
        return this._uiUxDesignController;
    }

    get webDeveleopmentController(): WebDevelopmentController {
        return this._webDeveleopmentController;
    }

    get workController(): WorkController {
        return this._workController;
    }
}