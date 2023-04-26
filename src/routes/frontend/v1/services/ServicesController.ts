import {autoInjectable} from "tsyringe";
import express, {Router} from "express";
import Logger from "../../../../utils/Logger";
import AsyncHandler from "../../../../utils/AsyncHandler";
import Testimonial from "../../../../dto/Testimonial";
import TestimonialService from "../../../../service/TestimonialService";

@autoInjectable()
export default class ServicesController {
    private _router: Router;
    private _testimonialService: TestimonialService;

    constructor(testimonialService: TestimonialService) {
        Logger.debug("Initializing Service FrontEnd Routes");
        this._router = express.Router();
        this._testimonialService = testimonialService;
    }

    routes() {
        Logger.debug("Configuring routes for Services");
        this._router.get('/', AsyncHandler(async (req:any, res:any) => this.serveServices(req, res)));
        return this._router;
    }

    private async serveServices(req: any, res: any) {
        let testimonials: Testimonial[] = await this._testimonialService.getAllTestimonials();
        return res.render('services', { title: 'Express', testimonials: testimonials });
    }

}