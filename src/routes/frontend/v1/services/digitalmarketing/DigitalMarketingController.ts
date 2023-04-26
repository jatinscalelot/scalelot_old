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
export default class DigitalMarketingController {
    private _router: Router;
    private _testimonialService: TestimonialService;
    private _portfolioProjectService: PortfolioProjectService;

    constructor(portfolioProjectService: PortfolioProjectService, testimonialService: TestimonialService) {
        Logger.debug("Initializing Service Digital Marketing FrontEnd Routes");
        this._router = express.Router();
        this._testimonialService = testimonialService;
        this._portfolioProjectService = portfolioProjectService;
    }

    routes() {
        Logger.debug("Configuring routes for Services Digital Marketing");
        this._router.get('/', AsyncHandler(async (req:any, res:any) => this.serveDigitalMarketing(req, res)));
        this._router.get('/seo', AsyncHandler(async (req:any, res:any) => this.serveSeoMarketing(req, res)));
        this._router.get('/sem-ppc', AsyncHandler(async (req:any, res:any) => this.serveSemPpcMarketing(req, res)));
        this._router.get('/smm', AsyncHandler(async (req:any, res:any) => this.serveSMMMarketing(req, res)));
        return this._router;
    }

    private async serveDigitalMarketing(req: any, res: any) {
        let testimonials: Testimonial[] = await this._testimonialService.getAllTestimonials();
        let filteredTestimonials: Testimonial[] = testimonials.filter(testimonial => testimonial.tags == TestimonialTagsEnum.DIGITAL_MARKETING);

        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.DIGITAL_MARKETING) >= 0 ? true : false;
        });

        return res.render('services/digital-marketing', { title: 'Express', portfolios: filteredPortfolioProjects, testimonials: filteredTestimonials });
    }

    private async serveSeoMarketing(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.DIGITAL_MARKETING) >= 0 ? true : false;
        });

        return res.render('services/digital-marketing/seo-services', { title: 'Express', portfolios: filteredPortfolioProjects });
    }

    private async serveSemPpcMarketing(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.DIGITAL_MARKETING) >= 0 ? true : false;
        });

        return res.render('services/digital-marketing/sem-ppc-management', { title: 'Express', portfolios: filteredPortfolioProjects });
    }

    private async serveSMMMarketing(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.DIGITAL_MARKETING) >= 0 ? true : false;
        });

        return res.render('services/digital-marketing/social-media-marketing', { title: 'Express', portfolios: filteredPortfolioProjects });
    }

}