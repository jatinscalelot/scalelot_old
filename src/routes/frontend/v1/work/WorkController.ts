import {autoInjectable} from "tsyringe";
import express, {Router} from "express";
import Logger from "../../../../utils/Logger";
import AsyncHandler from "../../../../utils/AsyncHandler";
import PortfolioProjectService from "../../../../service/PortfolioProjectService";
import PortfolioProject from "../../../../dto/PortfolioProject";
import { PortfolioTagsEnum } from "../../../../utils/enum/PortfolioTagsEnum";
import Testimonial from "../../../../dto/Testimonial";
import TestimonialService from "../../../../service/TestimonialService";

@autoInjectable()
export default class WorkController {
    private _router: Router;
    private _portfolioProjectService: PortfolioProjectService;
    private _testimonialService: TestimonialService;

    constructor(portfolioProjectService: PortfolioProjectService, testimonialService: TestimonialService) {
        Logger.debug("Initializing Work FrontEnd Routes");
        this._router = express.Router();
        this._portfolioProjectService = portfolioProjectService;
        this._testimonialService = testimonialService;
    }

    routes() {
        Logger.debug("Configuring routes for Work");
        this._router.get('/', AsyncHandler(async (req:any, res:any) => this.serveWork(req, res)));
        this._router.get('/portfolio', AsyncHandler(async (req:any, res:any) => this.servePortfolio(req, res)));
        this._router.get('/testimonials', AsyncHandler(async (req:any, res:any) => this.serveTestimonials(req, res)));
        return this._router;
    }

    private async serveWork(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.INDEX) >= 0 ? true : false;
        });
        return res.render('work', { title: 'Express', portfolios: filteredPortfolioProjects });
    }

    private async servePortfolio(req: any, res: any) {
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        return res.render('work/portfolio', { title: 'Express', portfolios: portfolioProjects });
    }

    private async serveTestimonials(req: any, res: any) {
        let testimonials: Testimonial[] = await this._testimonialService.getAllTestimonials();
        return res.render('work/testimonials', { title: 'Express', testimonials: testimonials });
    }

}