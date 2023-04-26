import {autoInjectable} from "tsyringe";
import express, {Router} from "express";
import Logger from "../../../utils/Logger";
import AsyncHandler from "../../../utils/AsyncHandler";
import TestimonialService from "../../../service/TestimonialService";
import {plainToInstance} from "class-transformer";
import Testimonial from "../../../dto/Testimonial";
import FileDTO from "../../../dto/FileDTO";

@autoInjectable()
export default class TestimonialController {
    private _router: Router;
    private _testimonialService: TestimonialService;

    constructor(testimonialService: TestimonialService) {
        this._router = express.Router();
        this._testimonialService = testimonialService;
    }

    routes() {
        Logger.debug("Configuring routes for Client testimonial");
        this._router.post('/', AsyncHandler(async (req: any, res: any) => this.addTestimonial(req, res)));
        return this._router;
    }

    private async addTestimonial(req: any, res: any) {
        Logger.debug("Creating new Client testimonial");

        let testimonial: Testimonial = plainToInstance(Testimonial, req.body, {excludeExtraneousValues: true});

        let files: FileDTO[] = req.files.map((file: any) => {
            let fileDTO: FileDTO = plainToInstance(FileDTO, file, {excludeExtraneousValues: true});
            fileDTO.buffer = file.buffer.toString("base64");
            return fileDTO;
        });

        testimonial = await this._testimonialService.addTestimonial(testimonial, files);

        Logger.debug("Saved Testimonial: ")
        Logger.debug(testimonial);

        return res.redirect("/thanks");

        // return new SuccessResponse(ResponseMessages.CREATE_CAREER_SUCCESS, testimonial).send(res);
    }

}