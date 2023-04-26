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
export default class SalesFunnelDesignController {
    private _router: Router;
    private _testimonialService: TestimonialService;
    private _portfolioProjectService: PortfolioProjectService;

    constructor(portfolioProjectService: PortfolioProjectService, testimonialService: TestimonialService) {
        Logger.debug("Initializing Service Sales Funnel FrontEnd Routes");
        this._router = express.Router();
        this._testimonialService = testimonialService;
        this._portfolioProjectService = portfolioProjectService;
    }

    routes() {
        Logger.debug("Configuring routes for Services Sales Funnel");
        this._router.get('/', AsyncHandler(async (req:any, res:any) => this.serveSalesFunnelDesign(req, res)));
        this._router.get('/unbounce-landing-page-development', AsyncHandler(async (req:any, res:any) => this.serveULPDev(req, res)));
        this._router.get('/click-funnels-development', AsyncHandler(async (req:any, res:any) => this.serveClickFunnel(req, res)));
        this._router.get('/instapage-landing-page-development', AsyncHandler(async (req:any, res:any) => this.serveInstaLandingPageDev(req, res)));
        this._router.get('/hubspot-development', AsyncHandler(async (req:any, res:any) => this.serveHubspotDev(req, res)));
        return this._router;
    }

    private async serveSalesFunnelDesign(req: any, res: any) {
        let testimonials: Testimonial[] = await this._testimonialService.getAllTestimonials();
        let filteredTestimonials: Testimonial[] = testimonials.filter(testimonial => testimonial.tags == TestimonialTagsEnum.SALES_FUNNELS);

        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.SALES_FUNNELS) >= 0 ? true : false;
        });

        return res.render('services/sales-funnel', { title: 'Express', portfolios: filteredPortfolioProjects, testimonials: filteredTestimonials });
    }

    private async serveULPDev(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.SALES_FUNNELS) >= 0 ? true : false;
        });

        return res.render('services/sales-funnel/unbounce', { title: 'Express', portfolios: filteredPortfolioProjects });
    }

    private async serveClickFunnel(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.SALES_FUNNELS) >= 0 ? true : false;
        });

        return res.render('services/sales-funnel/click-funnels', { title: 'Express', portfolios: filteredPortfolioProjects });
    }

    private async serveInstaLandingPageDev(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.SALES_FUNNELS) >= 0 ? true : false;
        });

        return res.render('services/sales-funnel/instapage', { title: 'Express', portfolios: filteredPortfolioProjects });
    }

    private async serveHubspotDev(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.SALES_FUNNELS) >= 0 ? true : false;
        });

        return res.render('services/sales-funnel/hubspot', { title: 'Express', portfolios: filteredPortfolioProjects });
    }

}