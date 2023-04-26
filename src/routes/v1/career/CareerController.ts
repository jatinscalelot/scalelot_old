import express, {Router} from "express";
import {SuccessResponse} from "../../../utils/ApiResponse";
import ResponseMessages from "../../../utils/statics/ResponseMessages";
import Logger from "../../../utils/Logger";
import {autoInjectable} from "tsyringe";
import CareerService from '../../../service/CareerService';
import AsyncHandler from '../../../utils/AsyncHandler';
import {plainToInstance} from "class-transformer";
import Career from '../../../dto/Career';
import {ProtectedRequest} from "../../../utils/app-request";
import FileDTO from "../../../dto/FileDTO";

@autoInjectable()
export default class CareerController {
    private _router: Router;
    private _careerService: CareerService;

    constructor(careerService: CareerService) {
        Logger.debug("Initializing Register User Controller");
        this._router = express.Router();
        this._careerService = careerService;
    }


    routes() {
        Logger.debug("Configuring routes for Career");
        this._router.post('/', AsyncHandler(async (req: any, res: any) => this.createCareerController(req, res)));
        this._router.get('/all', AsyncHandler(async (req: ProtectedRequest, res: any) => this.getAllCareer(req, res)))
        return this._router;
    }

    private async createCareerController(req: any, res: any) {
        Logger.debug("New Career Create Requested.");

        let career: Career = plainToInstance(Career, req.body, {excludeExtraneousValues: true});

        let files: FileDTO[] = req.files.map((file: any) => {
            let fileDTO: FileDTO = plainToInstance(FileDTO, file, {excludeExtraneousValues: true});
            fileDTO.buffer = file.buffer.toString("base64");
            return fileDTO;
        });

        Logger.debug("Found Files Count: ");

        career = await this._careerService.createCareer(career, files);
        return res.redirect("/thanks");
        // return new SuccessResponse(ResponseMessages.CREATE_CAREER_SUCCESS,  instanceToPlain(career)).send(res);
    }

    private async getAllCareer(req: any, res: any) {
        Logger.debug("Download file for user: " + req.params.user_id);

        let careerList: Career[] = await this._careerService.fetchAllCareer();

        return new SuccessResponse(ResponseMessages.CREATE_CAREER_SUCCESS, careerList).send(res);

    }

}
