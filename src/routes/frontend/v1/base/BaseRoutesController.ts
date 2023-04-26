import {autoInjectable} from "tsyringe";
import express, {Router} from "express";
import Logger from "../../../../utils/Logger";
import AsyncHandler from "../../../../utils/AsyncHandler";
import PortfolioProjectService from "../../../../service/PortfolioProjectService";
import PortfolioProject from "../../../../dto/PortfolioProject";
import {PriorityEnum} from "../../../../utils/enum/PriorityEnum";
import Testimonial from "../../../../dto/Testimonial";
import TestimonialService from "../../../../service/TestimonialService";
import {PortfolioTagsEnum} from "../../../../utils/enum/PortfolioTagsEnum";

@autoInjectable()
export default class BaseController {
    private _router: Router;
    private _portfolioProjectService: PortfolioProjectService;
    private _testimonialService: TestimonialService;

    constructor(portfolioProjectService: PortfolioProjectService, testimonialService: TestimonialService) {
        Logger.debug("Initializing Base FrontEnd Routes");
        this._router = express.Router();
        this._portfolioProjectService = portfolioProjectService;
        this._testimonialService = testimonialService;
    }

    routes() {
        Logger.debug("Configuring routes for Base");
        this._router.get('/', AsyncHandler(async (req:any, res:any) => this.serveIndex(req, res)));
        this._router.get('/about-us', AsyncHandler(async (req:any, res:any) => this.serveAboutUs(req, res)));
        this._router.get('/career', AsyncHandler(async (req:any, res:any) => this.serveCareer(req, res)));
        // this._router.get('/how-we-work', AsyncHandler(async (req:any, res:any) => this.serveHowWeWork(req, res)));
        this._router.get('/blog', AsyncHandler(async (req:any, res:any) => this.serveBlog(req, res)));
        this._router.get('/faq', AsyncHandler(async (req:any, res:any) => this.serveFaq(req, res)));
        this._router.get('/offshore', AsyncHandler(async (req:any, res:any) => this.serveOffshore(req, res)));
        this._router.get('/contact', AsyncHandler(async (req:any, res:any) => this.serveContact(req, res)));
        this._router.get('/contact-us', AsyncHandler(async (req:any, res:any) => this.serveContactUs(req, res)));
        this._router.get('/html-sitemap', AsyncHandler(async (req:any, res:any) => this.serveHtmlSiteMap(req, res)));
        this._router.get('/thanks', AsyncHandler(async (req:any, res:any) => this.serveThanksMap(req, res)));
        return this._router;
    }

    private async serveIndex(req: Response, res: any): Promise<Response> {
        Logger.debug("Need to return index")
        let portfolioProjects: PortfolioProject[] = await this._portfolioProjectService.getAllPortfolio();
        let testimonials: Testimonial[] = await this._testimonialService.getAllTestimonials();

        let filteredPortfolioProjects: PortfolioProject[] = portfolioProjects.filter(portfolioProject => {
            return portfolioProject.tags.indexOf(PortfolioTagsEnum.INDEX) >= 0 ? true : false;
        });
        return res.render('index', { title: 'Express', portfolios: filteredPortfolioProjects, testimonials: testimonials });
    }

    private async serveAboutUs(req: any, res: any) {
        return res.render('aboutus', { title: 'Express' });
    }

    private async serveCareer(req: any, res: any) {
        return res.render('career', { title: 'Express' });
    }

    // private async serveHowWeWork(req: any, res: any) {
    //     return res.render('how-we-work', { title: 'Express' });
    // }

    private async serveBlog(req: any, res: any) {
        return res.render('blog', { title: 'Express' });
    }

    private async serveFaq(req: any, res: any) {
        return res.render('faq', { title: 'Express' });
    }

    private async serveOffshore(req: any, res: any) {
        return res.render('offshore', { title: 'Express' });
    }

    private async serveContact(req: any, res: any) {
        return res.redirect('/contact-us')
    }

    private async serveContactUs(req: any, res: any) {
        return res.render('contact', { title: 'Express' });
    }

    private async serveHtmlSiteMap(req: any, res: any) {
        return res.render('html-sitemap', { title: 'Express' });
    }
    private async serveThanksMap(req: any, res: any) {
        return res.render('thanks', { title: 'Express' });
    }
}