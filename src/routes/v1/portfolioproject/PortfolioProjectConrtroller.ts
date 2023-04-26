import {autoInjectable} from "tsyringe";
import express, {Router} from "express";
import Logger from "../../../utils/Logger";
import AsyncHandler from "../../../utils/AsyncHandler";
import {plainToInstance} from "class-transformer";
import PortfolioProject from "../../../dto/PortfolioProject";
import PortfolioProjectService from "../../../service/PortfolioProjectService";
import FileDTO from "../../../dto/FileDTO";

@autoInjectable()
export default class PortfolioProjectController {

    private _router: Router;
    private _portfolioProjectService: PortfolioProjectService;

    constructor(portfolioProjectService: PortfolioProjectService) {
        this._router = express.Router();
        this._portfolioProjectService = portfolioProjectService;
    }

    routes() {
        Logger.debug("Configuring Meta Keywords Router");
        this._router.post('/', AsyncHandler(async (req: any, res: any) => this.addPortfolioProject(req, res)));
        return this._router;
    }

    private async addPortfolioProject(req: any, res: any) {
        Logger.debug("Adding portfolio project");

        let portfolioProject: PortfolioProject = plainToInstance(PortfolioProject, req.body, {excludeExtraneousValues: true});

        Logger.debug("Got Portfolio Project");
        Logger.debug(portfolioProject);

        let files: FileDTO[] = req.files.map((file: any) => {
            let fileDTO: FileDTO = plainToInstance(FileDTO, file, {excludeExtraneousValues: true});
            fileDTO.buffer = file.buffer.toString("base64");
            return fileDTO;
        });

        portfolioProject = await this._portfolioProjectService.addPortfolioProject(portfolioProject, files);

        return res.redirect("/thanks");
        // return new SuccessResponse(ResponseMessages.CREATE_PORTFOLIO_PROJECT_SUCCESS, portfolioProject).send(res);
    }

}