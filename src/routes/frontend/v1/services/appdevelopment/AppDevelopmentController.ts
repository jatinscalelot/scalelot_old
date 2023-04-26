import {autoInjectable} from "tsyringe";
import express, {Router} from "express";
import Logger from "../../../../../utils/Logger";
import AsyncHandler from "../../../../../utils/AsyncHandler";
import Testimonial from "../../../../../dto/Testimonial";
import {TestimonialTagsEnum} from "../../../../../utils/enum/TestimonialTagsEnum";
import TestimonialService from "../../../../../service/TestimonialService";
import PortfolioProjectService from "../../../../../service/PortfolioProjectService";
import PortfolioProject from "../../../../../dto/PortfolioProject";
import {PortfolioTagsEnum} from "../../../../../utils/enum/PortfolioTagsEnum";

@autoInjectable()
export default class AppDevelopmentController {
    private _router: Router;
    private _testimonialService: TestimonialService;
    private _portfolioProjectService: PortfolioProjectService;

    constructor(portfolioProjectService: PortfolioProjectService, testimonialService: TestimonialService) {
        Logger.debug("Initializing Service App Development FrontEnd Routes");
        this._router = express.Router();
        this._testimonialService = testimonialService;
        this._portfolioProjectService = portfolioProjectService;
    }

    routes() {
        Logger.debug("Configuring routes for Services App Development");
        this._router.get('/', AsyncHandler(async (req:any, res:any) => this.serveAppDev(req, res)));
        this._router.get('/ios-app-development', AsyncHandler(async (req:any, res:any) => this.serveIosAppDev(req, res)));
        this._router.get('/android-app-development', AsyncHandler(async (req:any, res:any) => this.serveAndroidAppDev(req, res)));
        this._router.get('/hybrid-app-development', AsyncHandler(async (req:any, res:any) => this.serveHybridAppDev(req, res)));
        this._router.get('/flutter-app-development', AsyncHandler(async (req:any, res:any) => this.serveFlutterAppDev(req, res)));
        this._router.get('/react-native-app-development', AsyncHandler(async (req:any, res:any) => this.serveReactNativeAppDev(req, res)));
        return this._router;
    }

    private async serveAppDev(req: any, res: any) {
        let testimonials: Testimonial[] = await this._testimonialService.getAllTestimonials();
        let filteredTestimonials: Testimonial[] = testimonials.filter(testimonial => testimonial.tags == TestimonialTagsEnum.APP_DEVELOPMENT);

        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.APP_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/mobile-application-development', { title: 'Express', portfolios: filteredPortfolioProjects, testimonials: filteredTestimonials });
    }

    private async serveIosAppDev(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.APP_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/mobile-app-development/ios-native-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }

    private async serveAndroidAppDev(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.APP_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/mobile-app-development/android-app-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }

    private async serveHybridAppDev(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.APP_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/mobile-app-development/hybrid-app-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }

    private async serveFlutterAppDev(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.APP_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/mobile-app-development/flutter-app-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }

    private async serveReactNativeAppDev(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.APP_DEVELOPMENT) >= 0 ? true : false;
        });
        return res.render('services/mobile-app-development/react-native-app-development', { title: 'Express', portfolios: filteredPortfolioProjects });
    }

}