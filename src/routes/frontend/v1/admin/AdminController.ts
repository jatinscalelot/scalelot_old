import {autoInjectable} from "tsyringe";
import express, {Router} from "express";
import Logger from "../../../../utils/Logger";
import AsyncHandler from "../../../../utils/AsyncHandler";

@autoInjectable()
export default class AdminController {
    private _router: Router;

    constructor() {
        Logger.debug("Initializing Admin FrontEnd Routes");
        this._router = express.Router();
    }

    routes() {
        Logger.debug("Configuring routes for Admin");
        this._router.get('/', AsyncHandler(async (req:any, res:any) => this.serveAdmin(req, res)));
        this._router.get('/addMeta', AsyncHandler(async (req:any, res:any) => this.serveAddMeta(req, res)));
        this._router.get('/addPortfolio', AsyncHandler(async (req:any, res:any) => this.serveAddPortfolio(req, res)));
        this._router.get('/AddTestimonial', AsyncHandler(async (req:any, res:any) => this.serveAddTestimonial(req, res)));
        this._router.get('/dashboard', AsyncHandler(async (req:any, res:any) => this.serveDashboard(req, res)));
        return this._router;
    }

    private async serveAdmin(req: any, res: any) {
        return res.render('admin/login', { title: 'Express' });
    }

    private async serveAddMeta(req: any, res: any) {
        return res.render('admin/add_meta', { title: 'Express' });
    }

    private async serveAddPortfolio(req: any, res: any) {
        return res.render('admin/add_portfolio', { title: 'Express' });
    }

    private async serveAddTestimonial(req: any, res: any) {
        return res.render('admin/add_testimonial', { title: 'Express' });
    }

    private async serveDashboard(req: any, res: any) {
        return res.render('admin/dashboard', {title: 'Express'});
    }

}