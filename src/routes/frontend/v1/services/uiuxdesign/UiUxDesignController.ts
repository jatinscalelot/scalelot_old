import {autoInjectable} from "tsyringe";
import express, {Router} from "express";
import Logger from "../../../../../utils/Logger";
import AsyncHandler from "../../../../../utils/AsyncHandler";
import TestimonialService from "../../../../../service/TestimonialService";
import Testimonial from "../../../../../dto/Testimonial";
import {TestimonialTagsEnum} from "../../../../../utils/enum/TestimonialTagsEnum";
import PortfolioProjectService from "../../../../../service/PortfolioProjectService";
import PortfolioProject from "../../../../../dto/PortfolioProject";
import {PortfolioTagsEnum} from "../../../../../utils/enum/PortfolioTagsEnum";

@autoInjectable()
export default class UiUxDesignController {
    private _router: Router;
    private _testimonialService: TestimonialService;
    private _portfolioProjectService: PortfolioProjectService;

    constructor(portfolioProjectService: PortfolioProjectService, testimonialService: TestimonialService) {
        Logger.debug("Initializing Service UI/UX Design FrontEnd Routes");
        this._router = express.Router();
        this._testimonialService = testimonialService;
        this._portfolioProjectService = portfolioProjectService;
    }

    routes() {
        Logger.debug("Configuring routes for Services UI/UX Design");
        this._router.get('/', AsyncHandler(async (req:any, res:any) => this.serveUiUxDesign(req, res)));
        this._router.get('/mobile-app-design', AsyncHandler(async (req:any, res:any) => this.serveMobileAppDesign(req, res)));
        this._router.get('/website-design', AsyncHandler(async (req:any, res:any) => this.serveWebsiteDesign(req, res)));
        this._router.get('/web-app-design', AsyncHandler(async (req:any, res:any) => this.serveWebAppDesign(req, res)));
        this._router.get('/sales-funnels-design', AsyncHandler(async (req:any, res:any) => this.serveSalesFunnelDesign(req, res)));
        this._router.get('/game-design', AsyncHandler(async (req:any, res:any) => this.serveGameDesign(req, res)));
        this._router.get('/website-revamp-design', AsyncHandler(async (req:any, res:any) => this.serveWebRevampDesign(req, res)));
        return this._router;
    }

    private async serveUiUxDesign(req: any, res: any) {
        let testimonials: Testimonial[] = await this._testimonialService.getAllTestimonials();
        let filteredTestimonials: Testimonial[] = testimonials.filter(testimonial => testimonial.tags == TestimonialTagsEnum.UI_UX_DESIGN);

        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.UI_UX_DESIGN) >= 0 ? true : false;
        });

        return res.render('services/uiuxdesign', { title: 'Express', portfolios: filteredPortfolioProjects, testimonials: filteredTestimonials });
    }

    private async serveMobileAppDesign(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.UI_UX_DESIGN) >= 0 ? true : false;
        });

        return res.render('services/uiuxdesign/mobile-application-design', { title: 'Express', portfolios: filteredPortfolioProjects });
    }

    private async serveWebsiteDesign(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.UI_UX_DESIGN) >= 0 ? true : false;
        });

        return res.render('services/uiuxdesign/website-design', { title: 'Express', portfolios: filteredPortfolioProjects });
    }

    private async serveWebAppDesign(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.UI_UX_DESIGN) >= 0 ? true : false;
        });

        return res.render('services/uiuxdesign/web-application-design', { title: 'Express', portfolios: filteredPortfolioProjects });
    }

    private async serveSalesFunnelDesign(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.UI_UX_DESIGN) >= 0 ? true : false;
        });

        return res.render('services/uiuxdesign/sales-funnels-design', { title: 'Express', portfolios: filteredPortfolioProjects });
    }

    private async serveGameDesign(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.UI_UX_DESIGN) >= 0 ? true : false;
        });

        return res.render('services/uiuxdesign/game-design', { title: 'Express', portfolios: filteredPortfolioProjects });
    }

    private async serveWebRevampDesign(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.UI_UX_DESIGN) >= 0 ? true : false;
        });

        return res.render('services/uiuxdesign/website-redesign', { title: 'Express', portfolios: filteredPortfolioProjects });
    }

}