import express, {Router} from 'express';
import {autoInjectable, container} from 'tsyringe';
import BeanConfig from '../../config/BeanConfig';
import FrontEndBeanConfig from "../../config/FrontEndBeanConfig";

@autoInjectable()
export default class FrontEndRouterConfig {
    private router: Router;
    private frontEndBeanConfig: FrontEndBeanConfig;
    private isConfigured: boolean;

    constructor(frontEndBeanConfig: FrontEndBeanConfig) {
        this.router = express.Router();
        this.frontEndBeanConfig = frontEndBeanConfig;
        this.isConfigured = false;
    }

    private configureAdminRoutes() {
        this.router.use('/admin', this.frontEndBeanConfig.adminController.routes());
    }

    private configureBaseRoutes() {
        this.router.use('/', this.frontEndBeanConfig.baseController.routes());
    }

    private configureServiceRoutes() {
        const serviceRouter = express.Router();
        const appDevelopmentRouter = express.Router({mergeParams: true});
        const digitalMarketingRouter = express.Router({mergeParams: true});
        const graphicDesignRouter = express.Router({mergeParams: true});
        const salesFunnelRouter = express.Router({mergeParams: true});
        const uiUxDesignRouter = express.Router({mergeParams: true});
        const webDevelopmentRouter = express.Router({mergeParams: true});

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

    private configureWorkRoutes() {
        this.router.use('/work', this.frontEndBeanConfig.workController.routes());
    }

    public getRouter(): Router {
        if(this.isConfigured) {
            return this.router;
        }

        this.configureBaseRoutes();
        this.configureAdminRoutes();
        this.configureServiceRoutes();
        this.configureWorkRoutes();

        this.isConfigured = true;
        return this.router;
    }
}