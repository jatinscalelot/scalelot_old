import express, {Router} from 'express';
import {autoInjectable, container} from 'tsyringe';
import BeanConfig from '../../config/BeanConfig';

@autoInjectable()
export default class RouterConfig {
    private router: Router;
    private beanConfig: BeanConfig;
    private isConfigured: boolean;

    constructor(beanConfig: BeanConfig) {
        this.router = express.Router();
        this.beanConfig = beanConfig;
        this.isConfigured = false;
    }
    
    private configureCareerRoutes() {
        this.router.use('/career', this.beanConfig.careerController.routes());
        this.router.use('/login', this.beanConfig.loginController.routes());
        this.router.use('/contact-us', this.beanConfig.contactUsController.routes());
        this.router.use('/meta-keywords', this.beanConfig.metaKeywordsController.routes());
        this.router.use('/portfolio-project', this.beanConfig.portfolioProjectController.routes());
        this.router.use('/testimonial', this.beanConfig.testimonialController.routes());
    }


    public getRouter(): Router {
        if(this.isConfigured) {
            return this.router;
        }

        this.configureCareerRoutes();
        this.isConfigured = true;
        return this.router;
    }
}